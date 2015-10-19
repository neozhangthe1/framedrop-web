/**
 * Created by yutao on 15/10/6.
 */
import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';
import ItemPhoto from '../poi/itemPhoto.react.js';
import DynamicScripts from '../../server/lib/dynamicscript.js'
import Header from '../app/header.react.js';
import Canvas from '../frame/canvas.react.js';
import './frame.styl'


class FrameMainView extends Component {
  render() {
    const {frame} = this.props;
    var commentList = [].map(function (c) {
      return <Comment key={c.id} data={c}/>
    });

    return (
      <div>
        <Canvas data={this.props.frame}/>

        <div className="col-sm-12 frame-header">
          <div className="clearfix">
            <div>
              <h2 className="">
              <span  className="watch-title " dir="ltr" title="Russell Peters: Chinese Languages">
                Russell Peters: Chinese Languages
              </span>
              </h2>
            </div>
          </div>
          <hr className="no-margin"/>
          <div className="pull-left list-inline frame-header-btn">
            <a className="btn btn-lg">
              <i className="icon-paperplane"></i>
              <span> 分享</span>
            </a>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 item-footer-wrap no-padding">
          <div className="social-footer">
            {commentList}
            <div className="social-comment">

              <div className="media-body">
                <textarea className="form-control" placeholder="写下你的评论..." ref="comment"/>
                <a className="btn btn-primary hidden comment-btn" onClick={this.comment}>回复</a>
              </div>
            </div>
            <div className="display-message">
              No comments to display
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default class Frame extends Component {

  static propTypes = {
    actions: PropTypes.object,
    msg: PropTypes.object,
    item: PropTypes.object
  }

  componentDidMount() {
    this.props.actions.getFrame(this.props.params.id);
    jQuery(document).ready(function () {
      App.init();
    });
  }

  render() {
    const {actions, msg: {item: msg}, frame: {frame}, users: {viewer}} = this.props;

    const scripts = `
      <script type="text/javascript" src="/ui/unify/js/app.js"></script>
      <script type="text/javascript" src="/js/fabric/dist/fabric.js"></script>
      <script type="text/javascript" src="/js/darkroom/build/darkroom.js"></script>
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
      <DocumentTitle title={""}>
        <DynamicScripts scripts={scripts}>
          <div className="wrapper header-fixed header-fixed-space">
            <div className="header-v6 header-classic-white header-sticky">
              <Header tab={""} {...{viewer}} />
            </div>
            <div className="container main-container headerOffset">
              {/*<div className="row">
               //  <Breadcrumb category={this.state.category}/>
               //</div>*/}
              <div className="row transitionfx frame-main-view-wrap">
                <div className="col-md-8">
                  {(frame.url) ? <FrameMainView frame={frame}/> : null}

                </div>
                <div className="col-md-4 frame-side-view">
                  a
                </div>
              </div>
              {/*/.recommended  <Recommend />*/}
              <div style={{clear: 'both'}}/>
            </div>
          </div>
        </DynamicScripts>
      </DocumentTitle>
    );
  }

}
