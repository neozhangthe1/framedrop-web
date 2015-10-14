/**
 * Created by yutao on 15/10/5.
 */
import './discover.styl';
import DocumentTitle from 'react-document-title';
import Component from 'react-pure-render/component';
import DynamicScripts from '../../server/lib/dynamicscript.js'
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';
import Header from '../app/header.react.js'

import Waterfall from '../discover/waterfall.react.js'

export default class Discover extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    discover: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {actions, discover: {pois, offset}, msg: {discover: msg}} = this.props;
    const scripts = `
      <script type="text/javascript" src="/ui/unify-s/js/plugins/masterslider.theme.stf.js"></script>
      <script type="text/javascript" src="/ui/unify/js/app.js"></script>
      <script>
        jQuery(document).ready(function() {
          App.init();
            var owl = $("#owl-demo");

            owl.owlCarousel({
                items : 10, //10 items above 1000px browser width
                itemsDesktop : [1000,5], //5 items between 1000px and 901px
                itemsDesktopSmall : [900,3], // betweem 900px and 601px
                itemsTablet: [600,2], //2 items between 600 and 0
                itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
                pagination: false,
                scrollPerPage: true
            });
        });
      </script>
    `;

    return (
      <DocumentTitle title={msg.title}>
        <DynamicScripts scripts={scripts}>
          <div className="wrapper header-fixed header-fixed-space discover">
            <div className="header-v6 header-classic-white header-sticky">
              <Header tab={"discover"}/>
            </div>

            <div className="guide-slider-wrap">
              <div className="container">
                <div id="owl-demo" className="container owl-carousel owl-theme">
                  <div className="item"><h3>1</h3></div>
                  <div className="item"><h3>2</h3></div>
                  <div className="item"><h3>3</h3></div>
                  <div className="item"><h3>4</h3></div>
                  <div className="item"><h3>5</h3></div>
                  <div className="item"><h3>6</h3></div>
                  <div className="item"><h3>7</h3></div>
                  <div className="item"><h3>8</h3></div>
                  <div className="item"><h3>9</h3></div>
                  <div className="item"><h3>10</h3></div>
                  <div className="item"><h3>11</h3></div>
                  <div className="item"><h3>12</h3></div>
                  <div className="item"><h3>13</h3></div>
                  <div className="item"><h3>14</h3></div>
                  <div className="item"><h3>15</h3></div>
                  <div className="item"><h3>16</h3></div>
                </div>
              </div>
            </div>

            {/*=== End Breadcrumbs ===*/}
            {/*=== Content Part ===*/}
            <div className="frame-items-waterfall">
              <Waterfall {...{actions, pois, offset}}/>
            </div>
          </div>
        </DynamicScripts>
      </DocumentTitle>
    );
  }

}
