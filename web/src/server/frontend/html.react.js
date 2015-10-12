import React, {Component, PropTypes} from 'react';

export default class Html extends Component {

  static propTypes = {
    appCssHash: PropTypes.string.isRequired,
    bodyHtml: PropTypes.string.isRequired,
    googleAnalyticsId: PropTypes.string.isRequired,
    isProduction: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const {
      appCssHash, bodyHtml, googleAnalyticsId, isProduction, title
    } = this.props;

    // Only for production. For dev, it's handled by webpack with livereload.
    const linkStyles = isProduction &&
      <link
        href={'/_assets/app.css?' + appCssHash}
        rel="stylesheet"
      />;

    const analytics = isProduction && googleAnalyticsId !== 'UA-XXXXXXX-X' &&
      <script
        dangerouslySetInnerHTML={{__html: `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', '${googleAnalyticsId}', 'auto'); ga('send', 'pageview');`}}
      />;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
          <title>{title}</title>
          {linkStyles}
          {analytics}
          <link href="/ui/unify/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
          <link href="/ui/unify/css/style.css" rel="stylesheet"/>
          <link href="/ui/unify/css/headers/header-v6.css" rel="stylesheet"/>
          <link href="/ui/unify/css/theme-colors/red.css" rel="stylesheet"/>
          <link href="/ui/unify/css/custom.css" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.css"/>
          <link rel="stylesheet" href="/ui/unify/plugins/line-icons/line-icons.css"/>
          <link rel="stylesheet" href="/ui/unify/plugins/animate.css"/>
          <link rel="stylesheet" href="/ui/unify/plugins/fancybox/source/jquery.fancybox.css"/>
          <link rel="stylesheet" href="/ui/unify/plugins/owl-carousel/owl-carousel/owl.carousel.css"/>
          <link rel="stylesheet" href="/ui/unify/plugins/master-slider/masterslider/style/masterslider.css"/>
          <link rel='stylesheet' href="/ui/unify/plugins/master-slider/masterslider/skins/black-2/style.css"/>
          <link rel='stylesheet' href="/iconmoon/style.css"/>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"/>
          <script type="text/javascript" src="/ui/unify/plugins/owl-carousel/owl-carousel/owl.carousel.js"></script>
        </head>
        <body dangerouslySetInnerHTML={{__html: bodyHtml}} />
      </html>
    );
  }

}
