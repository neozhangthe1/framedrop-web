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
import Header from '../app/header.react.js';
import Wizard from '../wizard/wizard.react.js';

import Waterfall from '../waterfall/waterfall.react.js'

export default class Discover extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    discover: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.actions.getDiscoverPois(this.props.discover.offset, 30);
  }

  render() {
    const {actions, discover: {pois, offset}, msg: {discover: msg}, users: {viewer}} = this.props;
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
          <div className="wrapper header-fixed header-fixed-space">
            <div className="header-v6 header-classic-white header-sticky">
              <Header tab={"discover"} {...{viewer}} />
            </div>

            <div className="guide-slider-wrap">
              <div className="container">
                <div id="owl-demo" className="container owl-carousel owl-theme">
                  <div className="item"><span>1</span></div>
                  <div className="item"><span>2</span></div>
                  <div className="item"><span>3</span></div>
                  <div className="item"><span>4</span></div>
                  <div className="item"><span>5</span></div>
                  <div className="item"><span>6</span></div>
                  <div className="item"><span>7</span></div>
                  <div className="item"><span>8</span></div>
                  <div className="item"><span>9</span></div>
                  <div className="item"><span>10</span></div>
                  <div className="item"><span>11</span></div>
                  <div className="item"><span>12</span></div>
                  <div className="item"><span>13</span></div>
                  <div className="item"><span>14</span></div>
                  <div className="item"><span>15</span></div>
                  <div className="item"><span>16</span></div>
                </div>
              </div>
            </div>

            {/*=== End Breadcrumbs ===*/}
            {/*=== Content Part ===*/}
            <center className="discover-nav">
              <div className="btn-group rounded" role="group">
                <button className="btn btn-default">
                  <i className="icon-photo"> </i>
                  帧
                </button>
                <button className="btn btn-default ">
                  <i className="icon-tag"> </i>
                  标记
                </button>
                <button className="btn btn-default ">
                  <i className="icon-layers"> </i>
                  队列
                </button>
                <button className="btn btn-default ">
                  <i className="icon-star"> </i>
                  收藏
                </button>
              </div>
            </center>

            <div className="frame-items-waterfall">
              <Waterfall {...{actions, pois, offset}}/>
            </div>

            <Wizard />
          </div>
        </DynamicScripts>
      </DocumentTitle>
    );
  }

}
