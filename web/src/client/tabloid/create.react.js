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


export default class CreateTabloid extends Component {

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
            <div className="container content-xs">
              <div className="col-md-8">
                <h1>创建丢帧小报</h1>

                <div className="grid-16-8 clearfix">
                  <div className="article">
                    <form id="oform" name="online_form" method="post">
                      <div style={{display: 'none'}}><input type="hidden" name="ck" defaultValue="gQyh"/></div>
                      <input name="kind" type="hidden" defaultValue/>
                      <input name="site_id" type="hidden" defaultValue/>
                      <input name="widget_id" type="hidden" defaultValue/>

                      <div className="attn" id="errordiv">
                      </div>
                      <fieldset className="detail site">
                        <legend>创建线上活动</legend>
                        <div className="fsct clearfix">
                          <label htmlFor="title">标题：<br /><span className="pl">(必填)</span></label>

                          <div className="fsctm"><input type="text" id="title" defaultValue max_length={200}
                                                        className="w" size={37} name="title"/></div>
                        </div>
                        <div className="fsct clearfix">
                          <label htmlFor="desc">内容描述:<br /><span className="pl">(必填)</span></label>

                          <div className="fsctm"><textarea name="desc" cols={45} rows={10} className="w" id="desc"
                                                           defaultValue={""}/><br /><br /></div>
                        </div>
                        <div className="fsct clearfix">
                          <label>相关网址：<br /><span className="pl"/></label>

                          <div className="fsctm"><input type="text" title="http://"
                                                        className="w j a_search_text greyinput" defaultValue
                                                        max_length={200} size={37} name="related_url"/>
                            <br /><span className="pl">若添加小组/小站网址，相应的小组/小站会出现在活动首页</span><br /><br /></div>
                        </div>
                        <div className="fsct clearfix">
                          <label>时间：<br /><span className="pl">(必填)</span></label>

                          <div className="fsctm">
                            <input name="begin_day" type="text" size={10} max_length={10} defaultValue="2015-11-05"
                                   id="begin_day" className="calendarSelectDate"/>
                            <select name="begin_hour" id="begin_hour">
                              <option value={7}>07</option>
                              <option value={8}>08</option>
                              <option value={9}>09</option>
                              <option value={10}>10</option>
                              <option value={11}>11</option>
                              <option value={12}>12</option>
                              <option value={13}>13</option>
                              <option value={14}>14</option>
                              <option value={15}>15</option>
                              <option value={16}>16</option>
                              <option value={17}>17</option>
                              <option value={18}>18</option>
                              <option value={19}>19</option>
                              <option value={20}>20</option>
                              <option value={21}>21</option>
                              <option value={22}>22</option>
                              <option value={23}>23</option>
                              <option value={0}>00</option>
                              <option value={1} selected="">01</option>
                              <option value={2}>02</option>
                              <option value={3}>03</option>
                              <option value={4}>04</option>
                              <option value={5}>05</option>
                              <option value={6}>06</option>
                            </select>:
                            <select name="begin_minute" id="begin_minute">
                              <option value={0}>00</option>
                              <option value={5}>05</option>
                              <option value={10}>10</option>
                              <option value={15}>15</option>
                              <option value={20}>20</option>
                              <option value={25}>25</option>
                              <option value={30}>30</option>
                              <option value={35}>35</option>
                              <option value={40}>40</option>
                              <option value={45}>45</option>
                              <option value={50}>50</option>
                              <option value={55}>55</option>
                            </select>
                            到
                            <input name="end_day" type="text" size={10} max_length={10} defaultValue="" id="end_day"
                                   className="calendarSelectDate"/>
                            <select name="end_hour" id="end_hour">
                              <option value={7}>07</option>
                              <option value={8}>08</option>
                              <option value={9}>09</option>
                              <option value={10}>10</option>
                              <option value={11}>11</option>
                              <option value={12}>12</option>
                              <option value={13}>13</option>
                              <option value={14}>14</option>
                              <option value={15}>15</option>
                              <option value={16}>16</option>
                              <option value={17}>17</option>
                              <option value={18}>18</option>
                              <option value={19}>19</option>
                              <option value={20}>20</option>
                              <option value={21}>21</option>
                              <option value={22}>22</option>
                              <option value={23}>23</option>
                              <option value={0}>00</option>
                              <option value={1} selected="true">01</option>
                              <option value={2}>02</option>
                              <option value={3}>03</option>
                              <option value={4}>04</option>
                              <option value={5}>05</option>
                              <option value={6}>06</option>
                            </select>:
                            <select name="end_minute" id="end_minute">
                              <option value={0}>00</option>
                              <option value={5}>05</option>
                              <option value={10}>10</option>
                              <option value={15}>15</option>
                              <option value={20}>20</option>
                              <option value={25}>25</option>
                              <option value={30}>30</option>
                              <option value={35}>35</option>
                              <option value={40}>40</option>
                              <option value={45}>45</option>
                              <option value={50}>50</option>
                              <option value={55}>55</option>
                            </select>
                            <br /><span className="pl">活动时间不能超过3个月</span><br /><br /></div>
                        </div>
                        <div className="fsct clearfix" id="type-tags">
                          <label>类型标签：<br /></label>

                          <div className="fsctm">
                            <div className="tags-editor">
                              <fieldset className="tags-writer">
                                <label htmlFor="author_tags_clone5473">添加标签，多个标签用空格分隔，帮助你更好地整理内容</label>
                                <input id="author_tags" name="author_tags" type="hidden" defaultValue/>
                                <input tabIndex={3} id="author_tags_clone5473" className="author_tags_clone"
                                       name="author_tags_clone" type="text" defaultValue/>
                              </fieldset>
                            </div>
                            <div className="tags-control">
                              <span className="tags-tip error-msg"/>
                              <a href="#" className="tags_more">展开全部<i className="triangle triangle-right"/></a>
                              <dl className="tags-folder">
                                <dt>常用标签：</dt>
                                <dd>
                                  <span>照片</span>
                                  <span>生活</span>
                                  <span>摄影</span>
                                  <span>图片</span>
                                  <span>电影</span>
                                  <span>回忆</span>
                                  <span>爱情</span>
                                  <span>分享</span>
                                  <span>音乐</span>
                                  <span>旅行</span>
                                  <span>祝福</span>
                                  <span>青春</span>
                                  <span>截图</span>
                                  <span>创意</span>
                                  <span>情感</span>
                                  <span>搞笑</span>
                                  <span>娱乐</span>
                                  <span>测试</span>
                                  <span>晒</span>
                                  <span>读书</span>
                                  <span>明信片</span>
                                  <span>生日</span>
                                  <span>美食</span>
                                  <span>爱</span>
                                  <span>心情</span>
                                  <span>自拍</span>
                                  <span>梦想</span>
                                  <span>公益</span>
                                  <span>游戏</span>
                                  <span>明星</span>
                                  <b>...</b>
                                </dd>
                              </dl>
                            </div>
                            <br /><span className="pl">用标签描述活动的特点，不超过4个，用空格分开</span><br /><br /></div>
                        </div>
                        <div className="fsct clearfix">
                          <label htmlFor="another">其他：<br /></label>

                          <div className="fsctm"><input id="another" type="checkbox" name="cascade_invite"
                                                        defaultChecked="checked"/>允许所有参与活动的成员邀请自己的朋友来参加<br /></div>
                        </div>
                      </fieldset>
                      <br />

                      <p align="center">
                        <input name="submit" type="submit" defaultValue="确定"/> &nbsp;&nbsp; <input name="cancel"
                                                                                                   type="button"
                                                                                                   onclick="javascript:history.go(-1)"
                                                                                                   defaultValue="取消"/>
                      </p>

                      <div id="calendarDiv"/>
                    </form>
                  </div>


                </div>
              </div>

              <div className="col-md-4">
                <h2>什么是合适的线上活动？</h2>

                <div>
                  <p className="pl">线上活动是</p>
                  <ol className="pl">
                    <li>有明确的开始和结束时间（需要长期进行的，小组的方式更适合你）</li>
                    <li>有明确集中的主题和可做之事，是一个真正的"活动"</li>
                    <li>是多人在网上进行的集体活动（一个人的行为不算）</li>
                    <li>活动需要在豆瓣上开展和进行（纯粹来做网站推广/拉人的商业活动请绕行）</li>
                  </ol>
                </div>
              </div>

            </div>


          </div>
        </DynamicScripts>
      </DocumentTitle>
    );
  }

}
