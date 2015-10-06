/**
 * Created by yutao on 15/10/6.
 */
import "./canvas.styl";
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

export default class Canvas extends Component {

  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    //var that = this;
    //console.log(this.props.data);
    var w = this.props.data.width;
    var h = this.props.data.height;
    //if (w < 1000) {
    //  w = 1000;
    //  h = 1000 / this.props.data.width * this.props.data.height;
    //}
    h = React.findDOMNode(this.refs.wrap).offsetWidth / w * h;
    w = React.findDOMNode(this.refs.wrap).offsetWidth;
    // create a wrapper around native canvas element (with id="c")
    //var canvas = new fabric.Canvas('tagger');
    console.log(React.findDOMNode(this.refs.wrap));
    console.log(h);
    //canvas.setWidth(w);
    //canvas.setHeight(h);
    //
    //// create a rectangle object
    //var rect = new fabric.Rect({
    //  left: 100,
    //  top: 100,
    //  fill: 'red',
    //  width: 20,
    //  height: 20
    //});
    //
    //// "add" rectangle onto canvas
    //canvas.add(rect);

    var dkrm = new Darkroom('#item-img', {
      // Size options
      minWidth: w,
      minHeight: h,
      maxWidth: w,
      maxHeight: h,
      backgroundColor: '#000',

      // Plugins options
      plugins: {
        //save: false,
        crop: {
          quickCropKey: 67, //key "c"
          //minHeight: 50,
          //minWidth: 50,
          //ratio: 4/3
        }
      },

      // Post initialize script
      initialize: function() {
        var cropPlugin = this.plugins['crop'];
        // cropPlugin.selectZone(170, 25, 300, 300);
        cropPlugin.requireFocus();
      }
    });

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
        <div className="image-container" id="main-image-wrap" >
          <img src={data.url} id="item-img" crossOrigin="Anonymous" alt="lorem ipsum dolor sit" ref="img"/>
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
              <a href className="pull-left">
                <img alt="image" src='{localStorage.getItem("avatar")}' />
              </a>
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
