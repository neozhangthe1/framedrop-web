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
import DiscoverNav from '../discover/discoverNav.react.js'
import DiscoverFrame from '../discover/discoverFrame.react.js'

import ReactDOM from 'react-dom'
import ReactTabs from 'react-tabs'
let Tab = ReactTabs.Tab;
let Tabs = ReactTabs.Tabs;
let TabList = ReactTabs.TabList;
let TabPanel = ReactTabs.TabPanel;


export default class Discover extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    discover: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.actions.getDiscoverPois(this.props.discover.offset, 30);
  }

  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  render() {
    const {actions, discover: {pois, frames, offset}, msg: {discover: msg}, users: {viewer}} = this.props;
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

    let data = pois;


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
              <Tabs
                selectedIndex={0}
                >

                <TabList>

                  <Tab>
                    <i className="icon-photo"> </i>
                    帧
                  </Tab>
                  <Tab>
                    <i className="icon-tag"> </i>
                    标记
                  </Tab>
                  <Tab>
                    <i className="icon-layers"> </i>
                    队列
                  </Tab>
                  <Tab>
                    <i className="icon-star"> </i>
                    收藏
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="frame-items-waterfall">
                    <DiscoverFrame {...{actions, frames, offset}} />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="frame-items-waterfall">
                    <Waterfall {...{actions, pois, offset}}/>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>Hello from Baz</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Hello aafrom Baz</h2>
                </TabPanel>
              </Tabs>
            </center>
            <Wizard />
          </div>
        </DynamicScripts>
      </DocumentTitle>
    );
  }

}
