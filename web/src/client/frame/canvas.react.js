/**
 * Created by yutao on 15/10/6.
 */
import "./canvas.styl";
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames'
import {List, Range, Record} from 'immutable';

var getPosition = (element) => {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }
  return {x: xPosition, y: yPosition};
}


export default class Canvas extends Component {

  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {w: 0, h: 0, wrapW: 0, wrapH: 0, tagging: false, points: List()};
    this.addTag = this.addTag.bind(this);
  }

  componentDidMount() {
    var wrapW, w = this.props.data.width;
    var wrapH, h = this.props.data.height;

    if (w > ReactDom.findDOMNode(this.refs.wrap).offsetWidth) {
      h = ReactDom.findDOMNode(this.refs.wrap).offsetWidth / w * h;
      w = ReactDom.findDOMNode(this.refs.wrap).offsetWidth;
      wrapW = w;
      wrapH = h;
    } else {
      wrapW = ReactDom.findDOMNode(this.refs.wrap).offsetWidth
    }

    this.setState({w: w, h: h, wrapW: wrapW, wrapH: wrapH});
    console.log(this.state)
  }

  addTag(e) {
    if (e.button !== 0) return;
    var parentPosition = getPosition(e.relatedTarget);
    var x = e.nativeEvent.offsetX / this.state.w;
    var y = e.nativeEvent.offsetY / this.state.h;
    this.setState({x: x, y: y, tagging: true});
    this.setState({points: this.state.points.concat([{x: x, y: y}])});
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
    var commentList = [].map(function (c) {
      return <Comment key={c.id} data={c}/>
    });

    var pointsElem = this.state.points.map((p, i) => {
      return <aside className="annotation comment-group separator-between-all-comments open" key={i} style={{top: p.y * this.state.h - 12, left: p.x * this.state.w - 12}}>
        <i className="marker">
          <i className="marker-inner" style={{background:'#0b9ed4'}}></i>
        </i>
      </aside>
    });


    return (
      <div className="col-lg-12 no-padding item-info-wrap canvas-wrap" ref="wrap">
        {/* left column */}
        <div className={classNames("image-container", {tagging: this.state.tagging})} id="main-image-wrap"
             style={{height: this.state.wrapH}} onClick={this.addTag}>

          <div className="item-img-wrap">
            <img src={data.url} id="item-img" crossOrigin="Anonymous" alt="lorem ipsum dolor sit" ref="img" style={{width: this.state.w, height: this.state.h}}/>
          </div>
          <div className="points-wrap" style={{height: this.state.wrapH, width: "100%"}}>
            {pointsElem}
          </div>
          <div className="item-img-active-wrap item-tag-guide" style={{height: this.state.h}}>
            <div className="cbp-l-caption-alignCenter">
              <div className="item-img-active-body">
                <div className="cbp-l-grid-agency-title">点击图片中有趣的地方</div>
              </div>
            </div>
          </div>
          <div className="item-img-active-wrap item-tag-choice black" style={{height: this.state.h}}>
            <div className="cbp-l-caption-alignCenter">
              <div className="item-img-active-body">
                <ul className="link-captions">
                  <li><a href="portfolio_single_item.html">
                    <i className="rounded-x icon-package"/></a>
                    <span>东西</span>
                  </li>
                  <li><a href="portfolio_single_item.html">
                    <i className="rounded-x fa icon-t-shirt"/></a>
                    <span>穿搭</span>
                  </li>
                  <li><a href="portfolio_single_item.html">
                    <i className="rounded-x fa icon-food2"/></a>
                    <span>美食</span>
                  </li>
                  <li><a href="portfolio_single_item.html">
                    <i className="rounded-x fa icon-shop"/></a>
                    <span>家居</span>
                  </li>
                  <li><a href="assets/img/main/img4.jpg" className="cbp-lightbox" data-title="Design Object">
                    <i className="rounded-x icon-location"/></a>
                    <span>地点</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

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
