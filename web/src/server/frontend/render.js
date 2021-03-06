import DocumentTitle from 'react-document-title';
import Html from './html.react';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from '../config';
import createLocation from 'history/lib/createLocation';
import createRoutes from '../../client/createRoutes';
import createStore from './createStore';
import useragent from 'useragent';
import {HOT_RELOAD_PORT} from '../../../webpack/constants';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import {RoutingContext, match} from 'react-router';

import DynamicScripts from '../lib/dynamicscript.js'

export default function render(req, res, next) {
  createStore(req)
    .then(store => renderPage(store, req, res, next))
    .catch(next);
}

function renderPage(store, req, res, next) {
  const routes = createRoutes(() => store.getState());
  const location = createLocation(req.url);

  match({routes, location}, (error, redirectLocation, renderProps) => {

    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      return;
    }

    if (error) {
      next(error);
      return;
    }

    if (renderProps == null) {
      res.status(404).end();
      return;
    }

    const ua = useragent.is(req.headers['user-agent']);
    const appHtml = getAppHtml(store, renderProps);
    const clientState = store.getState();
    const html = getPageHtml(appHtml, clientState, req.hostname, ua);

    res.send(html);
  });
}

function getAppHtml(store, renderProps) {
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <IntlProvider>
        <RoutingContext {...renderProps} />
      </IntlProvider>
    </Provider>
  );
}

function getPageHtml(appHtml, clientState, hostname, ua) {
  let scriptHtml = '';

  const needIntlPolyfill = ua.safari || (ua.ie && ua.version < '11');
  if (needIntlPolyfill) {
    scriptHtml += `
    <script src="/node_modules/intl/dist/Intl.min.js"></script>
    <script src="/node_modules/intl/locale-data/jsonp/en-US.js"></script>`;
  }

  const appScriptSrc = config.isProduction
    ? '/_assets/app.js?' + config.assetsHashes.appJs
    : `//${hostname}:${HOT_RELOAD_PORT}/build/app.js`;
  scriptHtml += `
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(clientState)};
    </script>
    <script src="${appScriptSrc}"></script>
  `;

  scriptHtml += `
          <script src="/ui/unify/plugins/bootstrap/js/bootstrap.min.js"/>

          <script type="text/javascript" src="/ui/unify/plugins/back-to-top.js"></script>
          <script type="text/javascript" src="/ui/unify/plugins/smoothScroll.js"></script>
          <script type="text/javascript" src="/ui/unify/plugins/jquery.parallax.js"></script>
          <script src="/ui/unify/plugins/master-slider/masterslider/masterslider.min.js"></script>
          <script src="/ui/unify/plugins/master-slider/masterslider/jquery.easing.min.js"></script>
          <script type="text/javascript" src="/ui/unify/plugins/counter/waypoints.min.js"></script>
          <script type="text/javascript" src="/ui/unify/plugins/counter/jquery.counterup.min.js"></script>
          <script type="text/javascript" src="/ui/unify/plugins/fancybox/source/jquery.fancybox.pack.js"></script>

          <script type="text/javascript" src="/ui/unify/js/custom.js"></script>
          <script type="text/javascript" src="/ui/unify/js/plugins/fancy-box.js"></script>

          <script type="text/javascript" src="/ui/unify/js/plugins/owl-carousel.js"></script>

  `;

  scriptHtml += DynamicScripts.rewind() || "";

  scriptHtml += `
    <script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?8a41fe4af95fd0e8e1e2b71176e3f250";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    </script>
  `;

  const title = DocumentTitle.rewind();



  return '<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(
    <Html
      appCssHash={config.assetsHashes.appCss}
      bodyHtml={`<div id="app">${appHtml}</div>` + scriptHtml}
      googleAnalyticsId={config.googleAnalyticsId}
      isProduction={config.isProduction}
      title={title}
    />
  );
}
