/**
 * Created by yutao on 15/10/5.
 */
import './waterfall.styl';
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

var Masonry = require('react-masonry-component')(React);


var getHeight = (item, width) => {
  var height = 0;
  var product_height = 0;

  if (item.width > 0) {
    height = item.height * width / item.width;
  }
  if (item.product_img_width > 0) {
    product_height = item.product_img_height * width / item.product_img_width;
  }

  return [height, product_height]
};


let masonryOptions = {
  transitionDuration: '0.2s',
  isAnimated: true,
  gutter: 20,
  columnWidth: 211
};



export default class Waterfall extends Component {

  componentDidMount() {
    this.props.actions.getDiscoverItems(this.props.offset, 30);
  }

  render() {
    const {actions, items, offset} = this.props;

    var childElements = items.map(function(item){
      var sourceIcon = "fa ";
      var sourceType = "";
      if (item.src_type == "Movie") {
        sourceIcon += "fa-film";
        sourceType = "movie";
      } else if (item.src_type == "Tv") {
        sourceIcon += "fa-tv";
        sourceType = "tv";
      }
      //var Categories = item.category.map(function(d) {
      //  return (
      //    <a href={"/category/" + d.id} className="source">
      //      <small>#{d.label_cn} </small>
      //    </a>
      //  )
      //}.bind(this));
      var height = getHeight(item, 211);
      var styles = {
        height: height[0]
      };
      var product_styles = {
        height: height[1]
      };

      return (
        <div className="grid-boxes-in">
          <a href={"/product/" + item.id}>
            <img className="img-responsive item-photo" src={item.img} style={styles} alt />
          </a>
          <a href={"/product/" + item.id}>
            <img className="img-responsive item-photo" src={item.product_img} style={product_styles} alt />
          </a>
          <div className="grid-boxes-caption">
            <div className="author-box">
              <a className="author-avatar-link" href="http://dongxi.douban.com/people/Sprinna/">
                <img width="24" height="24" src="http://img3.douban.com/icon/u1660629-24.jpg" alt="苦艾" title="苦艾"/>
              </a>
              <small><a href="http://dongxi.douban.com/people/Sprinna/">心水机器人</a>&nbsp;发布</small>
            </div>
            <div className="story-quote">
              <small><span className="t-quote">{item.name} </span></small>
            </div>
          </div>
          <div className="grid-boxes-cat">
            <a href={"/" + sourceType + "/" + item.src_id} className="source">
              <small><i className={sourceIcon}/> {item.src_title_cn} </small>
            </a>
          </div>
          <div className="grid-boxes-stats">
            <ul className="list-inline font-xs color-gray text-center no-margin grid-boxes-news">
              <li><i className="fa fa-eye font-xs"> {item.num_viewed} </i></li>
              <li><i className="fa fa-heart font-xs"> {item.num_liked} </i></li>
              <li><i className="fa fa-comments-o font-xs"> {item.num_comments} </i></li>
            </ul>
          </div>
        </div>
      );
    });

    return (
      <Masonry
        className={'container content grid-boxes'} // default ''
        elementType={'div'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        >
        {childElements}
      </Masonry>
    );
  }
}
