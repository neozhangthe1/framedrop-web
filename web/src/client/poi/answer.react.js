/**
 * Created by yutao on 15/10/6.
 */
import './answer.styl';
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

export default class Answer extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  componentDidMount() {
  }

  render() {
    const {data} = this.props;
    const scripts = `
    `;
    var commentList = [].map(function(c) {
      return <Comment data={c} />
    });//this.state.comments

    return (
      <div className="col-lg-12 no-padding answer-outer-wrap">
        <div className="btn-group-vertical btn-group-vote">
          <div className="btn btn-default btn-upvote">
            <i className="icon-like"/>
            <small>138</small>
          </div>
          <div className="btn btn-default">
            <i className="icon-star"/>
          </div>
        </div>

        <div className="col-lg-12 no-padding item-info-wrap">
          <div className="col-lg-12 no-padding item-header">
            <div className="author-box">
              <a className="author-avatar-link" href="http://dongxi.douban.com/people/Sprinna/">
                <img width="30" height="30" className="rounded-x" src="http://img3.douban.com/icon/u1660629-24.jpg" alt="苦艾" title="苦艾"/>
              </a>
              <a href="http://dongxi.douban.com/people/Sprinna/">心水机器人</a>&nbsp;回答

            </div>
          </div>
          <div className="answer-wrap">
            <div className="answer-body">
              <div className="row answer-item-wrap">
                <div className="answer-item-img-wrap">
                  <img src={data.img} className="img-responsive" alt="img" />
                </div>
                <div className="answer-item-content-wrap">
                  <h2 className="">{data.title}</h2>
                  <div className="price"><span>{data.price}</span></div>
                  <div className="details-description">
                    <p>{this.props.data.comment}</p>
                  </div>

                  <div className="answer-footer">
                    <small class="answer-from">来自: {data.store}</small>
                  </div>
                  <a className="btn btn-primary answer-url">直达链接 <i className="fa fa-chevron-right"></i></a>
                </div>

              </div>
            </div>
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
      </div>
    );
  }

}
