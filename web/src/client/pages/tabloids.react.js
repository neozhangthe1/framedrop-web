/**
 * Created by yutao on 15/11/5.
 */
import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';
import ToCheck from '../home/toCheck.react';
import {FormattedHTMLMessage} from 'react-intl';

import DynamicScripts from '../../server/lib/dynamicscript.js'
import Header from '../app/header.react.js'


export default class Tabloids extends Component {

  // Why not .isRequired? https://github.com/rackt/react-router/issues/1505
  static propTypes = {
    msg: PropTypes.object
  }

  render() {

    const {msg: {home: msg}, users: {viewer}} = this.props;
    const scripts = `
      <script type="text/javascript" src="/ui/unify/js/app.js"></script>
    `;


    return (
      <DocumentTitle title={msg.title}>
        <DynamicScripts scripts={scripts}>
          <div className="wrapper header-fixed header-fixed-space">
            <div className="header-v6 header-classic-white header-sticky">
              <Header tab={"tabloid"} {...{viewer}} />
            </div>


            {/*=== Blog Posts ===*/}
            <div className="container content-xs">
              <div className="row">
                {/* Blog All Posts */}
                <div className="col-md-8">
                  {/* News v3 */}
                  <div className="row margin-bottom-20 list-wrap">
                    <div className="col-sm-5 sm-margin-bottom-20">
                      <img className="img-responsive" src="http://imgsrc.baidu.com/forum/w%3D580/sign=ea5479209e510fb37819779fe932c893/483d6736acaf2eddaf557e708d1001e9380193b2.jpg" alt />
                    </div>
                    <div className="col-sm-7 news-v3">
                      <div className="news-v3-in-sm no-padding">
                        {/*<ul className="list-inline posted-info">
                         <li>By Alexander Jenni</li>
                         <li>In <a href="#">Design</a></li>
                         <li>Posted January 24, 2015</li>
                         </ul>*/}
                        <h2><a href="#">《神探夏洛克》角色服装大盘点</a></h2>
                        <p>应大家要求，又找来了些夏洛克里的衣服等等。。。大家慢慢欣赏</p>
                        <ul className="post-shares">
                          <li>
                            <a href="#">
                              <i className="rounded-x icon-speech" />
                              <span>5</span>
                            </a>
                          </li>
                          <li><a href="#"><i className="rounded-x icon-share" /></a></li>
                          <li><a href="#"><i className="rounded-x icon-heart" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>{/*/end row*/}
                  {/* End News v3 */}
                  {/* News v3 */}
                  <div className="row margin-bottom-20 list-wrap">
                    <div className="col-sm-5 sm-margin-bottom-20">
                      <div className="carousel slide" data-ride="carousel" id="blog-carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                          <li data-target="#blog-carousel" data-slide-to={0} className="active rounded-x" />
                          <li data-target="#blog-carousel" data-slide-to={1} className="rounded-x" />
                          <li data-target="#blog-carousel" data-slide-to={2} className="rounded-x" />
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner" role="listbox">
                          <div className="item active">
                            <img src="http://img3.douban.com/view/note/large/public/p92197859-1.jpg" alt />
                          </div>
                          <div className="item">
                            <img src="http://img3.douban.com/view/note/large/public/p92197859-2.jpg" alt />
                          </div>
                          <div className="item">
                            <img src="/ui/unify/img/main/img24.jpg" alt />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7 news-v3">
                      <div className="news-v3-in-sm no-padding">

                        <h2><a href="#">Gossip Girl 穿衣经</a></h2>
                        <p>万众期待的Gossip girl（绯闻女孩）第四季正在热映，一周一集的更新进度真的超折磨人，还是先看看最新最爆最美的片场时尚花絮，让你观剧品味两不误。</p>
                        <ul className="post-shares">
                          <li>
                            <a href="#">
                              <i className="rounded-x icon-speech" />
                              <span>5</span>
                            </a>
                          </li>
                          <li><a href="#"><i className="rounded-x icon-share" /></a></li>
                          <li><a href="#"><i className="rounded-x icon-heart" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>{/*/end row*/}
                  {/* End News v3 */}
                  {/* News v3 */}
                  <div className="row margin-bottom-20 list-wrap">
                    <div className="col-sm-5 sm-margin-bottom-20">
                      <div className="responsive-video">
                        <iframe src="//player.vimeo.com/video/93094247?title=0&byline=0&portrait=0" frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
                      </div>
                    </div>
                    <div className="col-sm-7 news-v3">
                      <div className="news-v3-in-sm no-padding">
                        <ul className="list-inline posted-info">
                          <li>By Alexander Jenni</li>
                          <li>In <a href="#">Design</a></li>
                          <li>Posted January 24, 2015</li>
                        </ul>
                        <h2><a href="#">Awesome post “VIDEO”</a></h2>
                        <p>Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellus, imperdiet molestie est volutpat at. Sed viverra cursus nibh, sed consectetur ipsum sollicitudin non metus inmi efficitur...</p>
                        <ul className="post-shares">
                          <li>
                            <a href="#">
                              <i className="rounded-x icon-speech" />
                              <span>5</span>
                            </a>
                          </li>
                          <li><a href="#"><i className="rounded-x icon-share" /></a></li>
                          <li><a href="#"><i className="rounded-x icon-heart" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>{/*/end row*/}
                  {/* End News v3 */}
                  {/* News v3 */}
                  <div className="row margin-bottom-20 list-wrap">
                    <div className="col-sm-5 sm-margin-bottom-20">
                      <img className="img-responsive" src="/ui/unify/img/main/img18.jpg" alt />
                    </div>
                    <div className="col-sm-7 news-v3">
                      <div className="news-v3-in-sm no-padding">
                        <ul className="list-inline posted-info">
                          <li>By Luke Etheridge</li>
                          <li>In <a href="#">Design</a></li>
                          <li>Posted January 24, 2015</li>
                        </ul>
                        <h2><a href="#">Wonderful post “IMAGE”</a></h2>
                        <p>Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellus, imperdiet molestie est volutpat at. Sed viverra cursus nibh, sed consectetur ipsum sollicitudin non metus inmi efficitur...</p>
                        <ul className="post-shares">
                          <li>
                            <a href="#">
                              <i className="rounded-x icon-speech" />
                              <span>5</span>
                            </a>
                          </li>
                          <li><a href="#"><i className="rounded-x icon-share" /></a></li>
                          <li><a href="#"><i className="rounded-x icon-heart" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>{/*/end row*/}
                  {/* End News v3 */}
                  {/* News v3 */}
                  <div className="row margin-bottom-20 list-wrap">
                    <div className="col-sm-5 sm-margin-bottom-20">
                      <img className="img-responsive" src="/ui/unify/img/main/img3.jpg" alt />
                    </div>
                    <div className="col-sm-7 news-v3">
                      <div className="news-v3-in-sm no-padding">
                        <ul className="list-inline posted-info">
                          <li>By Alexander Jenni</li>
                          <li>In <a href="#">Design</a></li>
                          <li>Posted January 24, 2015</li>
                        </ul>
                        <h2><a href="#">Incredible standard post “IMAGE”</a></h2>
                        <p>Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellus, imperdiet molestie est volutpat at. Sed viverra cursus nibh, sed consectetur ipsum sollicitudin non metus inmi efficitur...</p>
                        <ul className="post-shares">
                          <li>
                            <a href="#">
                              <i className="rounded-x icon-speech" />
                              <span>5</span>
                            </a>
                          </li>
                          <li><a href="#"><i className="rounded-x icon-share" /></a></li>
                          <li><a href="#"><i className="rounded-x icon-heart" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>{/*/end row*/}
                  {/* End News v3 */}
                  {/* Pager v3 */}
                  <ul className="pager pager-v3 pager-sm no-margin-bottom">
                    <li className="previous"><a href="#">← Older</a></li>
                    <li className="page-amount">1 of 7</li>
                    <li className="next"><a href="#">Newer →</a></li>
                  </ul>
                  {/* End Pager v3 */}
                </div>
                {/* End Blog All Posts */}
                {/* Blog Sidebar */}
                <div className="col-md-4">
                  <div className="col-xs-12 right-component">
                    <a class="btn btn-primary" href="/tabloid/create">创建小报</a>
                  </div>

                  {/* End Photostream */}
                </div>
                {/* End Blog Sidebar */}
              </div>
            </div>
            {/*=== End Blog Posts ===*/}
          </div>
        </DynamicScripts>
      </DocumentTitle>
    );
  }

}
