import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';
import ToCheck from '../home/toCheck.react';
import {FormattedHTMLMessage} from 'react-intl';

import DynamicScripts from '../../server/lib/dynamicscript.js'
import Header from '../app/header.react.js'


export default class Home extends Component {

  // Why not .isRequired? https://github.com/rackt/react-router/issues/1505
  static propTypes = {
    msg: PropTypes.object
  }

  render() {

    const {msg: {home: msg}, users: {viewer}} = this.props;
    const scripts = `
      <script type="text/javascript" src="/ui/unify/js/app.js"></script>
      <script>
        jQuery(document).ready(function() {
          App.init();
          App.initCounter();
          App.initParallaxBg();
          FancyBox.initFancybox();
          MSfullWidth.initMSfullWidth();
          OwlCarousel.initOwlCarousel();
          });
      </script>
    `;

    console.log(this.props)

    return (
      <DocumentTitle title={msg.title}>
        <DynamicScripts scripts={scripts}>
          <div className="wrapper header-fixed">
            <div className="header-v6 header-white-transparent header-sticky">
              <Header tab={"home"} {...{viewer}} />
            </div>
            <div className="ms-layers-template home-slider">
              {/* masterslider */}
              <div className="master-slider ms-skin-black-2 round-skin" id="masterslider">
                <div className="ms-slide" style={{zIndex: 10}}>
                  <img src="/ui/unify/plugins/master-slider/masterslider/style/blank.gif" data-src="http://7xkkj9.com1.z0.glb.clouddn.com/frame/d/1002916808" alt />
                  <div className="ms-layer ms-promo-info color-light" style={{left: 15, top: 160}} data-effect="bottom(40)" data-duration={2000} data-delay={700} data-ease="easeOutExpo">Introducing</div>
                  <div className="ms-layer ms-promo-info ms-promo-info-in color-light" style={{left: 15, top: 210}} data-effect="bottom(40)" data-duration={2000} data-delay={1000} data-ease="easeOutExpo"><span className="color-green">Unify</span> Template</div>
                  <div className="ms-layer ms-promo-sub color-light" style={{left: 15, top: 310}} data-effect="bottom(40)" data-duration={2000} data-delay={1300} data-ease="easeOutExpo">We are creative technology company providing <br /> key digital services on web and mobile.</div>
                  <a className="ms-layer btn-u btn-weibo" style={{left: 15, top: 390}} href="#" data-effect="bottom(40)" data-duration={2000} data-delay={1300} data-ease="easeOutExpo"><i className="fa fa-weibo"/> 微博登陆</a>
                  <a className="ms-layer btn-u btn-weixin" style={{left: 150, top: 390}} href="#" data-effect="bottom(40)" data-duration={2000} data-delay={1300} data-ease="easeOutExpo"><i className="fa fa-weixin"/> 微信登陆</a>
                </div>
                <div className="ms-slide" style={{zIndex: 13}}>
                  <img src="/ui/unify/plugins/master-slider/masterslider/style/blank.gif" data-src="http://7xkkj9.com1.z0.glb.clouddn.com/frame/d/1003393787" alt />
                  <img className="ms-layer" src="/ui/unify/plugins/master-slider/masterslider/style/blank.gif" data-src="/ui/unify/img/mockup/hand-black-iphone-l.png" alt style={{bottom: '-10px', left: 15, width: 400, height: 'auto'}} data-effect="bottom(100)" data-duration={2000} data-ease="easeOutExpo" data-type="image" />
                  <h3 className="ms-layer ms-promo-info-in color-light" style={{left: 450, top: 170}} data-effect="right(40)" data-duration={2300} data-delay={1300} data-ease="easeOutExpo">MOST</h3>
                  <h3 className="ms-layer ms-promo-info-in color-darker" style={{left: 450, top: 230}} data-effect="left(40)" data-duration={2300} data-delay={1400} data-ease="easeOutBack">INCREDIBLE</h3>
                  <h3 className="ms-layer ms-promo-info-in color-darker" style={{left: 450, top: 290}} data-effect="left(40)" data-duration={2300} data-delay={1400} data-ease="easeOutBack">NEW <span className="color-light">FEATURES</span></h3>
                  <a className="ms-layer btn-u" style={{left: 450, top: 370}} href="#" data-effect="bottom(40)" data-duration={2000} data-delay={1300} data-ease="easeOutExpo"><i className="fa fa-wechat"/> 微信登陆</a>
                  <a className="ms-layer btn-u btn-u-dark" style={{left: 580, top: 370}} href="#" data-effect="bottom(40)" data-duration={2000} data-delay={1300} data-ease="easeOutExpo">DOWNLOAD NOW</a>
                </div>
                <div className="ms-slide" style={{zIndex: 12}}>
                  <img src="/ui/unify/plugins/master-slider/masterslider/style/blank.gif" data-src="http://7xkkj9.com1.z0.glb.clouddn.com/frame/d/1005052797" alt />
                  <div className="ms-layer video-box" style={{bottom: 125, right: 15, width: 650, height: 370}} data-type="video" data-effect="rotate3dright(0,30,0,100,r)" data-duration={1500} data-ease="easeOutQuad">
                    <img className="ms-img-bordered" src="/ui/unify/plugins/master-slider/slider-templates/masterslider/style/blank.gif" data-src="/ui/unify/img/main/img20.jpg" alt />
                    <iframe src="http://player.vimeo.com/video/70528799" frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen> </iframe>
                  </div>
                  <h3 className="ms-layer ms-promo-info color-light" style={{left: 10, top: 170}} data-effect="bottom(20)" data-duration={2300} data-delay={2300} data-ease="easeOutExpo">AMAZING</h3>
                  <h3 className="ms-layer ms-promo-info-in color-light" style={{left: 10, top: 245}} data-effect="left(100)" data-duration={3300} data-delay={1900} data-ease="easeOutExpo"><span className="color-green">FEATURES</span></h3>
                  <h3 className="ms-layer normal-title color-light" style={{left: 10, top: 312}} data-effect="bottom(20)" data-duration={2300} data-delay={2000} data-ease="easeOutExpo">UNIFY BOOTSTRAP TEMPLATE</h3>
                  <p className="ms-layer ms-promo-sub ms-promo-sub-in color-light" style={{left: 10, top: 360}} data-effect="right(40)" data-duration={2300} data-delay={2300} data-ease="easeOutExpo">YOUTUBE, VIMEO AND CUSTOM <br /> IFRAME SUPPORTED</p>
                </div>
              </div>
              {/* end of masterslider */}
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
                    <div className="headline-v2 bg-color-light"><h2>院线热映</h2></div>
                    {/* Trending */}
                    <ul className="list-unstyled blog-trending margin-bottom-50 right-component-items">
                      <li>
                        <h3><a href="#">Proin dapibus ornare magna.</a></h3>
                        <small>19 Jan, 2015 / <a href="#">Hi-Tech,</a> <a href="#">Technology</a></small>
                      </li>
                      <li>
                        <h3><a href="#">Fusce at diam ante.</a></h3>
                        <small>17 Jan, 2015 / <a href="#">Artificial Intelligence</a></small>
                      </li>
                      <li>
                        <h3><a href="#">Donec quis consequat magna...</a></h3>
                        <small>5 Jan, 2015 / <a href="#">Web,</a> <a href="#">Webdesign</a></small>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 right-component">
                    {/* End Trending */}
                    <div className="headline-v2 bg-color-light"><h2>热播剧集</h2></div>
                    {/* Latest Links */}
                    <ul className="list-unstyled blog-latest-posts margin-bottom-50 right-component-items">
                      <li>
                        <h3><a href="#">The point of using Lorem Ipsum</a></h3>
                        <small>19 Jan, 2015 / <a href="#">Hi-Tech,</a> <a href="#">Technology</a></small>
                        <p>Phasellus ullamcorper pellentesque ex. Cras venenatis elit orci, vitae dictum elit egestas a. Nunc nec auctor mauris, semper scelerisque nibh.</p>
                      </li>
                      <li>
                        <h3><a href="#">Many desktop publishing packages...</a></h3>
                        <small>23 Jan, 2015 / <a href="#">Art,</a> <a href="#">Lifestyles</a></small>
                        <p>Integer vehicula sed justo ac dapibus. In sodales nunc non varius accumsan.</p>
                      </li>
                    </ul>
                  </div>

                  <div className="col-xs-12 right-component">
                    {/* End Latest Links */}
                    <div className="headline-v2 bg-color-light"><h2>Tags</h2></div>
                    {/* Tags v2 */}
                    <ul className="list-inline tags-v2 margin-bottom-50 right-component-items">
                      <li><a href="#">Web Design</a></li>
                      <li><a href="#">Economy</a></li>
                      <li><a href="#">Sport</a></li>
                      <li><a href="#">Marketing</a></li>
                      <li><a href="#">Books</a></li>
                      <li><a href="#">Elections</a></li>
                      <li><a href="#">Flickr</a></li>
                      <li><a href="#">Politics</a></li>
                    </ul>
                  </div>
                  <div className="col-xs-12 right-component">
                    {/* End Tags v2 */}
                    <div className="headline-v2 bg-color-light"><h2>Photostream</h2></div>
                    {/* Photostream */}
                    <ul className="list-inline blog-photostream margin-bottom-50 right-component-items">
                      <li>
                        <a href="/ui/unify/img/main/img22.jpg" rel="gallery" className="fancybox img-hover-v2" title="Image 1">
                          <span><img className="img-responsive" src="/ui/unify/img/main/img22.jpg" alt /></span>
                        </a>
                      </li>
                      <li>
                        <a href="/ui/unify/img/main/img23.jpg" rel="gallery" className="fancybox img-hover-v2" title="Image 2">
                          <span><img className="img-responsive" src="/ui/unify/img/main/img23.jpg" alt /></span>
                        </a>
                      </li>
                      <li>
                        <a href="/ui/unify/img/main/img4.jpg" rel="gallery" className="fancybox img-hover-v2" title="Image 3">
                          <span><img className="img-responsive" src="/ui/unify/img/main/img4.jpg" alt /></span>
                        </a>
                      </li>
                      <li>
                        <a href="/ui/unify/img/main/img9.jpg" rel="gallery" className="fancybox img-hover-v2" title="Image 4">
                          <span><img className="img-responsive" src="/ui/unify/img/main/img9.jpg" alt /></span>
                        </a>
                      </li>
                      <li>
                        <a href="/ui/unify/img/main/img25.jpg" rel="gallery" className="fancybox img-hover-v2" title="Image 5">
                          <span><img className="img-responsive" src="/ui/unify/img/main/img25.jpg" alt /></span>
                        </a>
                      </li>
                      <li>
                        <a href="/ui/unify/img/main/img6.jpg" rel="gallery" className="fancybox img-hover-v2" title="Image 6">
                          <span><img className="img-responsive" src="/ui/unify/img/main/img6.jpg" alt /></span>
                        </a>
                      </li>
                      <li>
                        <a href="/ui/unify/img/main/img20.jpg" rel="gallery" className="fancybox img-hover-v2" title="Image 7">
                          <span><img className="img-responsive" src="/ui/unify/img/main/img20.jpg" alt /></span>
                        </a>
                      </li>
                      <li>
                        <a href="/ui/unify/img/main/img3.jpg" rel="gallery" className="fancybox img-hover-v2" title="Image 8">
                          <span><img className="img-responsive" src="/ui/unify/img/main/img3.jpg" alt /></span>
                        </a>
                      </li>
                      <li>
                        <a href="/ui/unify/img/main/img7.jpg" rel="gallery" className="fancybox img-hover-v2" title="Image 9">
                          <span><img className="img-responsive" src="/ui/unify/img/main/img7.jpg" alt /></span>
                        </a>
                      </li>
                    </ul>
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
