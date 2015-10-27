///**
// * Created by yutao on 15/10/26.
// */
//import Component from 'react-pure-render/component';
//import React, {PropTypes} from 'react';
//import classNames from 'classnames'
//import {List, Range, Record} from 'immutable';
//import ReactDom from 'react-dom';
//import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
//import Waterfall from '../waterfall/waterfall.react.js'
//
//
//export default class DiscoverNav extends Component {
//
//  constructor(props) {
//    super(props);
//    this.state = {poiTabContent: null};
//  }
//
//  handleSelect(event, selectedKey) {
//    event.preventDefault();
//    alert('selected ' + selectedKey);
//  }
//
//  componentDidMount() {
//
//
//  }
//
//  render() {
//    return (
//    <Tabs>
//      <Tabs.Panel title='Tab #1'>
//        <div className="tab-v2">
//          <ul className="nav nav-tabs">
//            <li className="active">
//              <a href="#home-1" data-toggle="tab">
//                <i className="icon-photo"> </i>
//                帧
//              </a>
//            </li>
//            <li>
//              <a href="#profile-1" data-toggle="tab">
//                <i className="icon-tag"> </i>
//                标记
//              </a>
//            </li>
//            <li>
//              <a href="#messages-1" data-toggle="tab">
//                <i className="icon-layers"> </i>
//                队列
//              </a>
//            </li>
//            <li>
//              <a href="#settings-1" data-toggle="tab">
//                <i className="icon-star"> </i>
//                收藏
//              </a>
//            </li>
//          </ul>
//          <div className="tab-content">
//            <div className="tab-pane fade in active" id="home-1">
//              <h4>Heading Sample 1</h4>
//              <p>Vivamus imperdiet condimentum diam, eget placerat felis consectetur id. Donec eget orci metus, ac adipiscing nunc. Pellentesque fermentum <strong>ivamus imperdiet</strong> condimentum diam, eget placerat felis consectetur id. Donec eget orci metus, ac adipiscing nunc. Pellentesque <strong>fermentum vivamus</strong> imperdiet condimentum diam, eget placerat felis consectetur id. Donec eget orci metus, ac adipiscing nunc. Pellentesque fermentum, ante ac felis consectetur id. Donec eget orci metusvivamus imperdiet.</p>
//            </div>
//            <div className="tab-pane fade in" id="profile-1" ref="poiTab">
//              <div className="frame-items-waterfall">
//                <Waterfall {...{actions, pois, offset}}/>
//              </div>
//            </div>
//            <div className="tab-pane fade in" id="messages-1">
//              <h4>Heading Sample 3</h4>
//              <p><img alt className="pull-right rgt-img-margin img-width-200" src="assets/img/main/img21.jpg" /> <strong>Vivamus imperdiet condimentum diam, eget placerat felis consectetur id.</strong> Donec eget orci metus, Vivamus imperdiet condimentum diam, eget placerat felis consectetur id. Donec eget orci metus, ac adipiscing nunc. Pellentesque fermentum, ante ac interdum ullamcorper. Donec eget orci metus, ac adipiscing nunc. Pellentesque fermentum, consectetur id. Donec eget orci metus, ac adipiscing nunc. <strong>Pellentesque fermentum</strong>, ante ac interdum ullamcorper. Donec eget orci metus, ac adipiscing nunc. Pellentesque fermentum, ante ac interdum ullamcorper.</p>
//            </div>
//            <div className="tab-pane fade in" id="settings-1">
//              <h4>Heading Sample 4</h4>
//              <p><img alt className="pull-right rgt-img-margin img-width-200" src="assets/img/main/img23.jpg" /> Vivamus imperdiet condimentum diam, eget placerat felis consectetur id. Donec eget orci metus, Vivamus imperdiet condimentum diam, eget placerat felis consectetur id. Donec eget orci metus, ac adipiscing nunc. Pellentesque fermentum, ante ac interdum ullamcorper. Donec eget orci metus, ac adipiscing nunc. Pellentesque fermentum, consectetur id. Donec eget orci metus, ac adipiscing nunc. <strong>Pellentesque fermentum</strong>, ante ac interdum ullamcorper. Donec eget orci metus, ac adipiscing nunc. Pellentesque fermentum, ante ac interdum ullamcorper.</p>
//            </div>
//          </div>
//        </div>
//      </Tabs.Panel>
//      <Tabs.Panel title='Tab #2'>
//        <h2>Content #2 here</h2>
//      </Tabs.Panel>
//      <Tabs.Panel title='Tab #3'>
//        <h2>Content #3 here</h2>
//      </Tabs.Panel>
//    </Tabs>
//
//    );
//  }
//
//}
//
