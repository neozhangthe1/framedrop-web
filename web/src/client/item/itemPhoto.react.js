/**
 * Created by yutao on 15/10/6.
 */
import './itemPhoto.styl';
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

export default class ItemPhoto extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  componentDidMount() {
    const {item} = this.props;
    var w = item.width;
    var h = item.height;
    if (w < 1000) {
      w = 1000;
      h = 1000 / item.width * item.height;
    }
    var MSThumbnail = function () {
      return {
        initMSThumbnail: function () {
          var slider = new MasterSlider();
          slider.setup('masterslider', {
            width: w,
            height: h,
            fullwidth: true,
            centerControls: false,
            speed: 18,
            view: 'flow'
          });
          slider.control('arrows');
        }
      };
    }();
    MSThumbnail.initMSThumbnail();
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
      <div className="col-lg-12 no-padding item-info-wrap canvas-wrap">
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
          <div className="master-slider" id="masterslider">
            <div className="ms-slide">
              {/* slide background  */}
              <img src={item.img.split("?")[0]} data-src={item.img.split("?")[0]} alt="lorem ipsum dolor sit" />
            </div>
          </div>
          {/*<img src={item.img} className="img-responsive" id="main-image" alt="img" />*/}
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
           <a href="/skin/tshop/images/zoom/zoom1hi.jpg"><img src={item.img} className="img-responsive" alt="img" /></a>
           </div>
           */}
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
