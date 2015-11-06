/**
 * Created by yutao on 15/10/6.
 */
import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';
import ItemPhoto from '../poi/itemPhoto.react.js';
import DynamicScripts from '../../server/lib/dynamicscript.js'
import Header from '../app/header.react.js';
import Answer from '../poi/answer.react.js';
import './poi.styl';

export default class Poi extends Component {

  static propTypes = {
    actions: PropTypes.object,
    msg: PropTypes.object,
    poi: PropTypes.object
  }

  componentDidMount() {
    this.props.actions.getPoi(this.props.params.id);
    this.props.actions.getAnswers(this.props.params.id);
    jQuery(document).ready(function() {
      App.init();
    });
  }

  render() {
    const {actions, poi: {poi, answers}, users: {viewer}} = this.props;


    return (
      <DocumentTitle title={""}>
          <div className="wrapper header-fixed header-fixed-space">
            <div className="header-v6 header-classic-white header-sticky">
              <Header tab={"product"} {...{viewer}} />
            </div>

            <div className="container main-container headerOffset">
              {/*<div className="row">
               //  <Breadcrumb category={this.state.category}/>
               //</div>*/}
              <div className="row transitionfx">
                <div className="col-lg-8">
                  {(poi.img) ? <ItemPhoto poi={poi} actions={actions} /> : null}
                  {
                    answers.map(function (answer) {
                      return <Answer data={answer} key={answer.id}/>;
                    })
                  }
                </div>

                <div className="col-lg-4">
                  <div className="col-xs-12 poi-side-wrap teal-border-top">
                    <a className="btn-u btn-u-sea btn-u-xs" href={"/frame/" + poi.fid} style={{padding: "6px 13px", marginRight: "5px"}}>
                      <i className="icon-package" style={{"marginRight": 0, "vertical-align": "middle"}}> </i>
                      发布同款
                    </a>
                    <a className="btn-u btn-brd btn-brd-hover btn-u-xs  btn-u-sea item-header-btn" href={"/frame/" + poi.fid}>
                      <i className="icon-photo" style={{"marginRight": 0}}> </i>
                      返回图片
                    </a>
                  </div>
                </div>
              </div>
              {/*/.recommended  <Recommend />*/}
              <div style={{clear: 'both'}}/>
            </div>
          </div>
      </DocumentTitle>
    );
  }

}
