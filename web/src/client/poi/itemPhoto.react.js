/**
 * Created by yutao on 15/10/6.
 */
import './itemPhoto.styl';
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import classNames from 'classnames'
import ReactDom from 'react-dom';
import {List, Range, Record} from 'immutable';

export default class ItemPhoto extends Component {

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {w: 0, h: 0, wrapW: 0, wrapH: 0, tagging: false,
      points: [{x: this.props.poi.x, y: this.props.poi.y, type: 0}]};
  }

  componentDidMount() {
    var wrapW, w = this.props.poi.width;
    var wrapH, h = this.props.poi.height;

    if (w > ReactDom.findDOMNode(this.refs.wrap).offsetWidth) {
      h = ReactDom.findDOMNode(this.refs.wrap).offsetWidth / w * h;
      w = ReactDom.findDOMNode(this.refs.wrap).offsetWidth;
      wrapW = w;
      wrapH = h;
    } else {
      wrapW = ReactDom.findDOMNode(this.refs.wrap).offsetWidth
    }

    this.setState({w: w, h: h, wrapW: wrapW, wrapH: wrapH});
  }

  render() {
    const {poi} = this.props;

    var icon = "";
    var url = "";
    if (poi.src_type == "Movie") {
      icon = "fa fa-film";
      url = "/movie/" + poi.src_id;
    } else if (poi.src_type == "Tv") {
      icon = "fa fa-tv";
      url = "/tv/" + poi.src_id;
    }
    {/*var commentList = this.state.comments.map(function(c) {
      return <Comment key={c.id} data={c} />
    });*/}

    var poiElem = this.state.points.map((p, i) => {
      return <aside className="annotation comment-group separator-between-all-comments open" key={i} style={{top: p.y * this.state.h - 12, left: p.x * this.state.w - 12}}>
        <i className="marker">
          <i className="marker-inner" style={{background:'#0b9ed4'}}></i>
        </i>
      </aside>
    });

    return (
      <div className="col-lg-12 no-padding item-info-wrap canvas-wrap" ref="wrap">
        <div className="col-lg-12 no-padding item-header">
          <div className="author-box">
            <a className="author-avatar-link" href="http://dongxi.douban.com/people/Sprinna/">
              <img className="rounded-x"  width="30" height="30" src="http://img3.douban.com/icon/u1660629-24.jpg" alt="苦艾" title="苦艾"/>
            </a>
            <a href="http://dongxi.douban.com/people/Sprinna/">心水机器人</a>&nbsp;标记

            <div className="author-header-right pull-right">
              <a className="btn-u btn-brd btn-brd-hover btn-u-xs rounded btn-u-red item-header-btn" href={"/frame/" + poi.fid}>
                <i className="icon-heart" style={{"marginRight": 0}}> </i>
                喜欢
              </a>
              <a className="btn-u btn-brd btn-brd-hover btn-u-xs rounded btn-u-red item-header-btn" href={"/frame/" + poi.fid}>
                <i className="icon-photo" style={{"marginRight": 0}}> </i>
                返回图片
              </a>
            </div>
          </div>
        </div>
        {/* left column */}
        <div className="col-sm-12 item-img-wrap no-padding image-tagging" id="main-image-wrap" >
          {/*<canvas id='tagger'/>*/}
          <div className={classNames("image-container")} id="main-image-wrap" style={{height: this.state.wrapH}} >

            <div className="item-img-wrap">
              <img src={poi.img} id="item-img" crossOrigin="Anonymous" alt="lorem ipsum dolor sit" ref="img" style={{width: this.state.w, height: this.state.h}}/>
            </div>
            <div className="points-wrap" style={{height: this.state.wrapH, width: "100%"}}>
              {poiElem}
            </div>
          </div>

        </div>
        {/*/ left column end */}
        <div className="col-sm-12 tag-zone">
          <a href={url} className="source">
            <small><i className={icon}/> {poi.src_title_cn} </small>
          </a>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 item-footer-wrap no-padding">
          <div className="social-footer">
            {/*commentList*/}
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
