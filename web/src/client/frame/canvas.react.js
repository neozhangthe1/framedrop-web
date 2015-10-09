/**
 * Created by yutao on 15/10/6.
 */
import "./canvas.styl";
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames'

let isClient = typeof window !== "undefined";
let Tagger = isClient ? require('./tagger.react') : function() {};


var getPosition = (element) => {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }
  return { x: xPosition, y: yPosition, tagging: false };
}


export default class Canvas extends Component {

  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {w: 0, h: 0};
    this.addTag = this.addTag.bind(this);
  }

  componentDidMount() {
    var w = this.props.data.width;
    var h = this.props.data.height;

    h = ReactDom.findDOMNode(this.refs.wrap).offsetWidth / w * h;
    w = ReactDom.findDOMNode(this.refs.wrap).offsetWidth;

    this.setState({w: w, h: h});


  }

  addTag(e) {
    if (e.button !== 0) return;
    var parentPosition = getPosition(e.relatedTarget);
    var x = e.nativeEvent.offsetX;
    var y = e.nativeEvent.offsetY;
    this.setState({x: x, y: y, tagging: true});
    console.log(this.state)
  }

  render() {
    const {data} = this.props;

    var icon = "";
    var url = "";
    if (this.props.data.src_type == "Movie") {
      icon = "fa fa-film";
      url = "/movie/" + this.props.data.src_id;
    } else if (this.props.data.src_type == "Tv") {
      icon = "fa fa-tv";
      url = "/tv/" + this.props.data.src_id;
    }
    var commentList = [].map(function(c) {
      return <Comment key={c.id} data={c} />
    });


    return (
      <div className="col-lg-12 no-padding item-info-wrap canvas-wrap" ref="wrap">
        {/* left column */}
        <div className={classNames("image-container", {tagging: this.state.tagging})} id="main-image-wrap" style={{height: this.state.h}} onClick={this.addTag}>
          {/*<Tagger
            src={data.url}
            style={{height: 'auto', width: '100%'}}
            // Cropper.js options
            //aspectRatio={16 / 9}
            backgroud={false}
            //autoCropArea={0.3}
            autoCrop={false}
            zoomable={false}
            guides={true}
            ref='cropper'
            crop={this._crop} />*/}
          <div className="item-img-wrap">
            <img src={data.url} id="item-img" crossOrigin="Anonymous" alt="lorem ipsum dolor sit" ref="img" />
          </div>
          <div className="item-img-active-wrap item-tag-guide" style={{height: this.state.h}}>
            <div className="cbp-l-caption-alignCenter">
              <div className="item-img-active-body">
                {/*<ul className="link-captions">
                  <li><a href="portfolio_single_item.html"><i className="rounded-x fa fa-link" /></a></li>
                  <li><a href="assets/img/main/img4.jpg" className="cbp-lightbox" data-title="Design Object"><i className="rounded-x fa fa-search" /></a></li>
                </ul>*/}
                <div className="cbp-l-grid-agency-title">点击图片中感兴趣的地方</div>
                {/*<div className="cbp-l-grid-agency-desc">点击图片中感兴趣的地方</div>*/}
              </div>
            </div>
          </div>
          <div className="item-img-active-wrap item-tag-choice black" style={{height: this.state.h}}>
            <div className="cbp-l-caption-alignCenter">
              <div className="item-img-active-body">
                <ul className="link-captions">
                 <li><a href="portfolio_single_item.html"><i className="rounded-x fa fa-link" /></a></li>
                 <li><a href="assets/img/main/img4.jpg" className="cbp-lightbox" data-title="Design Object"><i className="rounded-x fa fa-search" /></a></li>
                 </ul>
              </div>
            </div>
          </div>


          {/*<img src={this.props.data.img} className="img-responsive" id="main-image" alt="img" />*/}
          {/*<div className="box-content-overly box-content-overly-white">
           <div className="box-text-table">
           <div className="box-text-cell ">
           <div className="box-text-cell-inner dark">
           <a className="btn btn-inverse btn-tagging"> 东西</a>
           <a className="btn btn-inverse btn-tagging"> 地点</a>
           <a className="btn btn-inverse btn-tagging"> 美食</a>
           <a className="btn btn-inverse btn-tagging"> 穿搭</a>
           <a className="btn btn-inverse btn-tagging"> 台词</a>
           </div>
           </div>
           </div>
           </div>*/}
          {/* product Image and Zoom
           <div className="main-image sp-wrap col-lg-12 no-padding style2 style2look2">
           <a href="/skin/tshop/images/zoom/zoom1hi.jpg"><img src={this.props.data.img} className="img-responsive" alt="img" /></a>
           </div>
           */}
        </div>
        {/*/ left column end */}
        <div className="col-sm-12 tag-zone">
          <a href={url} className="source">
            <small><i className={icon}/> {this.props.data.src_title_cn} </small>
          </a>
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
          </div>
        </div>
      </div>
    );
  }

}
