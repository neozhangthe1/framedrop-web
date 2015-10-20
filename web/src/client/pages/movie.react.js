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

import Waterfall from '../waterfall/waterfall.react.js'

export default class Movie extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    discover: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.actions.getPoiBySource(this.props.params.id);
  }

  render() {
    const {actions, source: {pois, offset}, msg: {discover: msg}, users: {viewer}} = this.props;

    return (
      <DocumentTitle title={msg.title}>
          <div className="wrapper header-fixed header-fixed-space">
            <div className="header-v6 header-classic-white header-sticky">
              <Header tab={"discover"} {...{viewer}} />
            </div>

            <div className="frame-items-waterfall">
              <center>
                <div className="btn-group  rounded" role="group">
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

              <Waterfall {...{actions, pois, offset}}/>
            </div>
          </div>
      </DocumentTitle>
    );
  }

}
