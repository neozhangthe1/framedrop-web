/**
 * Created by yutao on 15/10/26.
 */
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import classNames from 'classnames'
import {List, Range, Record} from 'immutable';
import ReactDom from 'react-dom';

var Masonry = require('react-masonry-component')(React);

let masonryOptions = {
    transitionDuration: '0.2s',
    isAnimated: true,
    gutter: 20,
    columnWidth: 211
};


var getHeight = (item, width) => {
    var height = 0;

    if (item.width > 0) {
        height = item.height * width / item.width;
    }

    return height;
};


export default class FrameList extends Component {

    componentDidMount() {
        const {id, actions, frames, offset} = this.props;
        this.props.actions.getFrameBySource(id, this.props.frames.length, 30);
    }

    render() {
        const {id, actions, frames, offset} = this.props;

        var childElements = frames.map(function (item) {
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
                height: height
            };
            console.log(item)

            return (
                <div className="grid-boxes-in grow grow-sm" key={item.id}>
                    <a href={"/frame/" + item.id}>
                        <img className="img-responsive item-photo" src={item.url} style={styles} alt/>
                    </a>


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
                className={'container content-xs grid-boxes'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                >
                {childElements}
            </Masonry>
        );
    }
}
