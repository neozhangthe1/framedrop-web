/**
 * Created by yutao on 15/10/6.
 */
import './itemPhoto.styl';
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import classNames from 'classnames'
import ReactDom from 'react-dom';

export default class ItemPhoto extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {w: 0, h: 0, wrapW: 0, wrapH: 0, tagging: false, points: []};
  }

  componentDidMount() {
    var wrapW, w = this.props.item.width;
    var wrapH, h = this.props.item.height;

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

  render() {
    const {item} = this.props;

    var icon = "";
    var url = "";
    if (item.src_type == "Movie") {
      icon = "fa fa-film";
      url = "/movie/" + item.src_id;
    } else if (item.src_type == "Tv") {
      icon = "fa fa-tv";
      url = "/tv/" + item.src_id;
    }
    {/*var commentList = this.state.comments.map(function(c) {
      return <Comment key={c.id} data={c} />
    });*/}

    return (
      <div className="col-lg-12 no-padding item-info-wrap canvas-wrap" ref="wrap">
        <div className="col-lg-12 no-padding item-header">
          <div className="author-box">
            <a className="author-avatar-link" href="http://dongxi.douban.com/people/Sprinna/">
              <img width="40" height="40" src="http://img3.douban.com/icon/u1660629-24.jpg" alt="苦艾" title="苦艾"/>
            </a>
            <a href="http://dongxi.douban.com/people/Sprinna/">心水机器人</a>&nbsp;标记
            <a className="add-pin tooltipHere" data-toggle="tooltip" data-original-title="标记"
               data-placement="left">
              <i className="glyphicon glyphicon-pushpin"/>
            </a>
            <a className="add-fav tooltipHere" data-toggle="tooltip" data-original-title="喜欢"
               data-placement="left">
              <i className="glyphicon glyphicon-heart"/>
            </a>
            <a className="btn btn-default" href={"/frame/" + item.fid}>返回帧</a>
          </div>
        </div>
        {/* left column */}
        <div className="col-sm-12 item-img-wrap no-padding image-tagging" id="main-image-wrap" >
          {/*<canvas id='tagger'/>*/}
          <div className={classNames("image-container")} id="main-image-wrap" style={{height: this.state.wrapH}} >

            <div className="item-img-wrap">
              <img src={item.img} id="item-img" crossOrigin="Anonymous" alt="lorem ipsum dolor sit" ref="img" style={{width: this.state.w, height: this.state.h}}/>
            </div>
            <div className="points-wrap" style={{height: this.state.wrapH, width: "100%"}}>
              {/*pointsElem*/}
            </div>
          </div>

        </div>
        {/*/ left column end */}
        <div className="col-sm-12 tag-zone">
          <a href={url} className="source">
            <small><i className={icon}/> {item.src_title_cn} </small>
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
