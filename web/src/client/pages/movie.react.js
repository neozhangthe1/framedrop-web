/**
 * Created by yutao on 15/10/20.
 */
import './discover.styl';
import DocumentTitle from 'react-document-title';
import Component from 'react-pure-render/component';
import DynamicScripts from '../../server/lib/dynamicscript.js'
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';
import Header from '../app/header.react.js'

import FrameList from '../movie/frameList.react.js'
import PoiList from '../movie/poiList.react.js'
import Wizard from '../wizard/wizard.react.js';

import ReactDOM from 'react-dom'
import ReactTabs from '../lib/react-tabs'
let Tab = ReactTabs.Tab;
let Tabs = ReactTabs.Tabs;
let TabList = ReactTabs.TabList;
let TabPanel = ReactTabs.TabPanel;


export default class Movie extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    discover: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  componentDidMount() {
  }

  render() {
    const {actions, source: {pois, frames, offset}, msg: {discover: msg}, users: {viewer}} = this.props;
    let id = this.props.params.id;

    return (
      <DocumentTitle title={msg.title}>
          <div className="wrapper header-fixed header-fixed-space">
            <div className="header-v6 header-classic-white header-sticky">
              <Header tab={"discover"} {...{viewer}} />
            </div>
            <div className="content-xs">
              <div className="discover-nav">
                <Tabs >

                  <TabList>
                    <Tab>
                      <a href="#home-1" data-toggle="tab" className="push">
                        <i className="icon-tag"> </i>
                        标记
                      </a>
                    </Tab>
                    <Tab>
                      <a href="#home-1" data-toggle="tab" className="push">
                        <i className="icon-photo"> </i>
                        图片
                      </a>
                    </Tab>

                    <Tab>
                      <a href="#home-1" data-toggle="tab" className="push">
                        <i className="icon-layers"> </i>
                        队列
                      </a>
                    </Tab>
                    <Tab>
                      <a href="#home-1" data-toggle="tab" className="push">
                        <i className="icon-star"> </i>
                        收藏
                      </a>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className="frame-items-waterfall">
                      <PoiList {...{id, actions, pois, offset}}/>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="frame-items-waterfall">
                      <FrameList {...{id, actions, frames, offset}} />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h2>Hello from Baz</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Hello aafrom Baz</h2>
                  </TabPanel>
                </Tabs>
              </div>
              <Wizard />
            </div>

          </div>
      </DocumentTitle>
    );
  }

}
