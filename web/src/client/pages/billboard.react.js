/**
 * Created by yutao on 15/10/20.
 */
/**
 * Created by yutao on 15/10/20.
 */
import './billboard.styl';
import DocumentTitle from 'react-document-title';
import Component from 'react-pure-render/component';
import DynamicScripts from '../../server/lib/dynamicscript.js'
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';
import Header from '../app/header.react.js'

import Waterfall from '../waterfall/waterfall.react.js'

export default class Billboard extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    discover: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.actions.getPoiBySource(this.props.params.id);
  }

  render() {
    const {actions, source: {pois, offset}, msg: {discover: msg}, users: {viewer}} = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div className="wrapper header-fixed header-fixed-space">
          <div className="header-v6 header-classic-white header-sticky">
            <Header tab={"discover"} {...{viewer}} />
          </div>
          <div className="container">
            <div className="col-md-8 billboard-content-wrap">
              <div className="billboard-content">
                <div className="fw wrapper-cover">
                  <div className="cover">
                    <img src="http://img02.liwushuo.com/image/151019/xfb1sekmr.jpg-w720" alt className="hoverZoomLink" /><p />
                  </div>
                </div>
                <div className="fw wrapper-main">
                  <div className="post">
                    <div className="td">
                      <h1 className="title">原来数码产品的周边，颜值也可以这样高！</h1>
                      <div className="td-post-info">
                        <ul className="post-info il-block">
                          {/*<li className="info-item"><i className="info-icon icon-like" data-id={1017472} style={{cursor: 'pointer'}} /><span>9561</span></li>
                           <li className="info-item"><i className="info-icon icon-comment" /><span>10</span></li>
                           <li className="info-item"><i className="info-icon icon-share" /><span>678</span></li>*/}
                        </ul>
                        <div className="date il-block">10月20日 星期二</div>
                      </div>
                    </div>
                    <hr className="fancy-line" />
                    <div className="content">
                      <p>热爱生活的人，就要学会从生活中的各个方面给自己找乐子，善于发现生活中那些细小甚微的美，你也会被生活打动。如果你从前认为数码产品的周边都很沉闷、死板、设计的毫无新意，那么请快往下看小礼君的推荐吧。你可曾想到，如今的数码产品周边的颜值竟然也可以高成这样，不仅极具设计感，实用性也在不断增强~既然没有钱总去换全新的数码产品，经常换换周边，也是棒棒哒！</p>
                      <h3 className="item-title"><span className="ititle-serial">1</span><span className="ititle">越狱兔木质手机架</span></h3>
                      <p>很实用的小玩意，有了它，就不需要“人肉手机支架了”，快来解放双手~<img src="http://img01.taobaocdn.com/bao/uploaded/i1/T1SBrmFbtjXXXXXXXX_!!0-item_pic.jpg_640x640q70.jpg" alt /></p>
                      <p /><div className="item-info" data-id={1006955}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥4.90</span></p><p className="item-like-info">3661人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3DQhu5H0RjMEccQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMVOhV1iY3ey2RitN3%2FurF3ytgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L5UtQ1QHzHYvR0JIHTQypkLLGyC%2BhucHKvcSpj5qSCmbA%3D" target="_blank"><span>查看详情</span></a></div><p />
                      <h3 className="item-title"><span className="ititle-serial">2</span><span className="ititle">iPhone可爱支架指环手机壳</span></h3>
                      <p>软包的边框，透明亚克力的硬壳外观，配上粉嫩的Hello Kitty，简直是满足了妹子们对手机壳的所有幻想。可最重要的是它还有加分相，背面自带环形支架，一步到位，再也不用发愁手机没有支架了~<img src="http://img03.liwushuo.com/image/151019/e2u7cdu6y.jpg-w720" alt /></p>
                      <p><img src="http://img02.liwushuo.com/image/151019/s14t3relq.jpg-w720" alt /></p>
                      <p /><div className="item-info" data-id={1037414}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥27.00</span></p><p className="item-like-info">1345人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3D3hYzfusgcDwcQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMfximgQbts8CRitN3%2FurF3ytgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L5Duj91ZX87OUm4DKK8p4mKgL2Z6FhayG6PuUKMILxyTw%3D" target="_blank"><span>查看详情</span></a></div><p />
                      <h3 className="item-title"><span className="ititle-serial">3</span><span className="ititle">猫默·日本可爱硅胶手机壳</span></h3>
                      <p>猫默的壳采用进口喷涂彩绘，图案清晰色泽饱满。“捕萤夏”和“探险去”两种款式清新自然，仿佛都可以闻到大自然的味道。这套手机壳适用苹果5和6全系列呦~<img src="http://img03.liwushuo.com/image/151019/gu7mv3v6b.jpg-w720" alt /></p>
                      <p /><div className="item-info" data-id={1037415}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥29.00</span></p><p className="item-like-info">2154人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3DxacVjPalfGwcQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMUcTguDFd3n4xq3IhSJN6GStgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L5tBIALggLsm49UUmkXpkeaig2qKTNQacgcSpj5qSCmbA%3D" target="_blank"><span>查看详情</span></a></div><p />
                      <h3 className="item-title"><span className="ititle-serial">4</span><span className="ititle">ICONIC·皮质多功能磁力耳机绕线器</span></h3>
                      <p>ICONIC的多功能整理器真的是创意无限，既可以当作耳机绕线器使用，也可以做手机屏幕擦，书签和笔插来用。采用磁铁相吸的原理，让你的生活更有序。这个小巧又富有设计感的整理器，快点收走吧！<img src="http://img01.liwushuo.com/image/151019/w9amppj3o.jpg-w720" alt /></p>
                      <p /><div className="item-info" data-id={1037422}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥19.80</span></p><p className="item-like-info">1321人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3DSfDPV08uMEQcQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMc2ZN7ngkSW3J1gyddu7kN%2BtgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L5FMnyWOIwbQz%2F%2Bf4JAAYF5B%2B8QWhxTZIbcSpj5qSCmbA%3D" target="_blank"><span>查看详情</span></a></div><p />
                      <h3 className="item-title"><span className="ititle-serial">5</span><span className="ititle">懒角落·多功能收纳包</span></h3>
                      <p>密实的尼龙材质，让这款收纳包更加结实耐用；包包边缘齐整紧密，不易崩线；包包里面有内衬，可以将物品轻松分隔放置。你的数据线、耳机线再也不会乱啦~<img src="http://img01.liwushuo.com/image/151019/z6f87vnyy.jpg-w720" alt /></p>
                      <p><img src="http://img03.liwushuo.com/image/151019/ag85we90x.jpg-w720" alt /></p>
                      <p /><div className="item-info" data-id={1037413}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥15.00</span></p><p className="item-like-info">2829人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3DGOB7FbJzoMccQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMakXwQoLAaq3t4hWD5k2kjOtgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L5UtQ1QHzHYvRbfXZxvI979Dt9RHyJ7uooxgxdTc00KD8%3D" target="_blank"><span>查看详情</span></a></div><p />
                      <h3 className="item-title"><span className="ititle-serial">6</span><span className="ititle">Bone·3.5mm防尘耳机塞</span></h3>
                      <p>全新垂吊式设计，任何方向都能使用；卡通吊坠的设计十分细腻，不掉色，软质也不刮伤机身。一件拉风小物就此诞生~<img src="http://img01.liwushuo.com/image/151019/eexiqk37w.jpg-w720" alt /></p>
                      <p><img src="http://img01.liwushuo.com/image/151019/usitcnzly.jpg-w720" alt /></p>
                      <p /><div className="item-info" data-id={1037420}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥36.00</span></p><p className="item-like-info">1702人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3DjgVKjvFjAQAcQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMUI0MuQt6bLXMMgx22UI05atgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L5FMnyWOIwbQwNR0L12V%2FD6I5cbrYuBi%2FUxgxdTc00KD8%3D" target="_blank"><span>查看详情</span></a></div><p />
                      <h3 className="item-title"><span className="ititle-serial">7</span><span className="ititle">三年二班·糖果色绕线器耳机</span></h3>
                      <p>超甜美的一款糖果色耳机，相信没有哪个女生会拒绝这么超脱的颜色。耳机的材料优质，光泽亮丽，结实耐用，耳麦处的软胶更能保护你的双耳。自带绕线器功能更不必让你每次收耳机时都手忙脚乱~<img src="http://img02.liwushuo.com/image/151019/hasnj9g8h.jpg-w720" alt /></p>
                      <p><img src="http://img03.liwushuo.com/image/151019/xgphg2poa.jpg-w720" alt /></p>
                      <p /><div className="item-info" data-id={1037416}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥13.60</span></p><p className="item-like-info">2519人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3DQLr%2BsO5dXNIcQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMUeF4d9UZ3qb8sviUM61dt2tgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L5%2Bb6zhhZGIM1XnmNBBo8WP2ti47%2F42T2FxgxdTc00KD8%3D" target="_blank"><span>查看详情</span></a></div><p />
                      <h3 className="item-title"><span className="ititle-serial">8</span><span className="ititle">Jstory·个性电脑鼠标垫</span></h3>
                      <p>来自韩国的个性鼠标垫，有微笑女孩和胡子大叔两款可以选择，让你在玩电脑的时候也会不自觉地低头多看几眼~耍出个性，就是这么简单！<img src="http://img02.liwushuo.com/image/151019/p40sosjc7.jpg-w720" alt /></p>
                      <p /><div className="item-info" data-id={1037421}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥15.00</span></p><p className="item-like-info">903人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3DkAwIw%2B3wc40cQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMTvp9x%2FF1aVp5x%2BIUlGKNpWtgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L5FMnyWOIwbQwfvWE9O566MkDceAxZ0a7PxgxdTc00KD8%3D" target="_blank"><span>查看详情</span></a></div><p />
                      <h3 className="item-title"><span className="ititle-serial">9</span><span className="ititle">OAE·卡通猫爪8gU盘</span></h3>
                      <p>看腻了普通的U盘，也给自己的数码周边换换装吧~可爱的猫爪造型，小巧又活泼，8G的内存足以应对平时的学习生活，更有五种颜色任你挑选！<img src="http://img02.liwushuo.com/image/151019/02v411m9i.jpg-w720" alt /><img src="http://img01.liwushuo.com/image/151019/ihihs2vli.jpg-w720" alt /></p>
                      <p /><div className="item-info" data-id={1037417}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥18.00</span></p><p className="item-like-info">2096人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3DIptkXJ9USTscQipKwQzePOeEDrYVVa64yK8Cckff7TVRAdhuF14FMRncgkzBFdUdt4hWD5k2kjOtgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L5sOa9AJKHFHOuPf7TCLBzfZrmLjUzElm5z2TFFEd9SqY%3D" target="_blank"><span>查看详情</span></a></div><p />
                      <h3 className="item-title"><span className="ititle-serial">10</span><span className="ititle">ANP·多口USB充电器</span></h3>
                      <p>四个USB接口加上1.8米长的插线头，无论你是在家还是出门旅行都是必备好帮手。多款清新颜色的选择，让充电器的颜值也立刻高了好几个档次！<img src="http://img01.liwushuo.com/image/151019/uobhd56xk.jpg-w720" alt /></p>
                      <p /><div className="item-info" data-id={1037419}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥39.00</span></p><p className="item-like-info">2067人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3D4TQBn%2BppCs0cQipKwQzePOeEDrYVVa64XoO8tOebS%2BdRAdhuF14FMfEKNfXluNvrJ1gyddu7kN%2BtgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L57lpnUWlhE3Ux6mSbUWBnEwfqC8796JNbcSpj5qSCmbA%3D" target="_blank"><span>查看详情</span></a></div><p />
                      <h3 className="item-title"><span className="ititle-serial">11</span><span className="ititle">8thdays·迷你蓝牙自拍器</span></h3>
                      <p>提到自拍器，相信不用多说大家都造它素干嘛的了。所以咱们就不拼功能，直接拼脸吧。小动物的造型简直是萌萌哒，让你自拍的时候心情更好，<img src="http://img02.liwushuo.com/image/150603/hbss4fhqx_w.png-w720" alt /></p>
                      <p><img src="http://img03.liwushuo.com/image/151019/l127uvuzm.jpg-w720" alt /></p>
                      <p /><div className="item-info" data-id={1022578}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥79.00</span></p><p className="item-like-info">10965人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3DaCGuXAQYAnQcQipKwQzePOeEDrYVVa64yK8Cckff7TVRAdhuF14FMRigx%2F357UDR5x%2BIUlGKNpWtgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L5mwK%2FbrJ31UtOBdaGKmXUGG%2FNJoWXBnkEUSwYGlubnWs%3D" target="_blank"><span>查看详情</span></a></div><p />
                      <h3 className="item-title"><span className="ititle-serial">12</span><span className="ititle">SOLOVE素乐·马卡龙可爱充电宝</span></h3>
                      <p>素乐赋予了充电宝马卡龙的色彩，倾注了对初恋甜蜜的理解，手感贴合的圆弧边缘，贴心惦念。会呼吸的灯光，点缀着精致，10000毫安也绝对能满足你的需求~</p>
                      <p><img src="http://img01.liwushuo.com/image/151019/q1z7i30o1.jpg-w720" alt /></p>
                      <p><img src="http://img01.liwushuo.com/image/151019/el1riy2ex.jpg-w720" alt /></p>
                      <p /><div className="item-info" data-id={1037418}><p className="item-info-price"><span style={{fontFamily: 'arial'}}>￥99.00</span></p><p className="item-like-info">1405人喜欢</p><a className="item-info-link" href="http://s.click.taobao.com/t?e=m%3D2%26s%3D5zRVJll8ArgcQipKwQzePOeEDrYVVa64yK8Cckff7TVRAdhuF14FMSvxjSwCgZIr1aH1Hk3GeOitgmtnxDX9deVMA5qBABUs5mPg1WiM1P5OS0OzHKBZzW1e2y4p13L51i2vrghzVSNjd7BiSYs6ZMrbLXNL3SHtxgxdTc00KD8%3D" target="_blank"><span>查看详情</span></a></div><p />
                    </div>
                  </div>
                  <div className="post-content-footer">
                    <ul className="post-info">
                      <li className="info-item"><i className="info-icon icon-like" data-id={1017472} style={{cursor: 'pointer'}} /><span>9561</span></li>
                      <li className="info-item"><i className="info-icon icon-comment" /><span>10</span></li>
                      <li className="info-item"><i className="info-icon icon-share" /><span>678</span></li>
                    </ul>
                    <ul className="share-list"><span>分享到</span>
                      <li className="share-item"><a className="share-icon icon-qq" href="http://connect.qq.com/widget/shareqq/index.html?url=http://www.liwushuo.com/posts/1017472&title=原来数码产品的周边，颜值也可以这样高！&pics=http://img02.liwushuo.com/image/151019/xfb1sekmr.jpg-w720" /></li>
                      <li className="share-item"><a className="share-icon icon-qzone" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.liwushuo.com/posts/1017472&title=原来数码产品的周边，颜值也可以这样高！&pics=http://img02.liwushuo.com/image/151019/xfb1sekmr.jpg-w720" /></li>
                      <li className="share-item"><a className="share-icon icon-weibo" href="http://service.weibo.com/share/share.php?searchPic=true&url=http://www.liwushuo.com/posts/1017472&appkey=2D4RUD&title=原来数码产品的周边，颜值也可以这样高！&pic=http://img02.liwushuo.com/image/151019/xfb1sekmr.jpg-w720&ralateUid=5100805544&language=zh_cn" /></li>
                      <li className="share-item"><a className="share-icon icon-weixin" /></li>
                    </ul>
                  </div>
                  <section className="post-comment">
                    <h3 className="comments-count">评论 (10)</h3>
                    <div id="post-comment">
                      <li className="comment-cell" id="comment-292353">
                        <a className="avatar" title="他.">
                          <img src="http://img03.liwushuo.com/avatar/150722/dd3e5d593_a.png-w180" alt />
                        </a>
                        <div className="comment-body">
                          <div className="comment-content">喜欢</div>
                          <div className="comment-operation" id="comment-operation-292353">
                            <div className="user-name">他.</div>
                            <div className="post-time">今天下午 6:31</div>
                            <a className="reply expand-reply" data-commentid={292353} id="reply-292353">回复</a>
                            <a className="reply fold-reply" data-commentid={292353} id="fold-reply-292353" style={{display: 'none'}}>收起回复</a>
                          </div>
                        </div>
                      </li>
                      <li className="comment-cell" id="comment-292350">
                        <a className="avatar" title="阿邱圆滚滚">
                          <img src="http://img02.liwushuo.com/avatar/150816/18c0140fc_a.png-w180" alt />
                        </a>
                        <div className="comment-body">
                          <div className="comment-content">我买过一个，¥89</div>
                          <div className="comment-operation" id="comment-operation-292350">
                            <div className="user-name">阿邱圆滚滚</div>
                            <div className="post-time">今天下午 6:11</div>
                            <a className="reply expand-reply" data-commentid={292350} id="reply-292350">回复</a>
                            <a className="reply fold-reply" data-commentid={292350} id="fold-reply-292350" style={{display: 'none'}}>收起回复</a>
                          </div>
                        </div>
                      </li>
                      <li className="comment-cell" id="comment-292342">
                        <a className="avatar" title="PHERST">
                          <img src="http://img02.liwushuo.com/avatar/151005/909a916f4_a-w180" alt />
                        </a>
                        <div className="comment-body">
                          <div className="comment-content">糖果色好美</div>
                          <div className="comment-operation" id="comment-operation-292342">
                            <div className="user-name">PHERST</div>
                            <div className="post-time">今天下午 5:52</div>
                            <a className="reply expand-reply" data-commentid={292342} id="reply-292342">回复</a>
                            <a className="reply fold-reply" data-commentid={292342} id="fold-reply-292342" style={{display: 'none'}}>收起回复</a>
                          </div>
                        </div>
                      </li>
                      <li className="comment-cell" id="comment-292337">
                        <a className="avatar" title="不开心">
                          <img src="http://q.qlogo.cn/qqapp/1101487442/4E1DCD4A1CD9A1C" alt />
                        </a>
                        <div className="comment-body">
                          <div className="comment-content">简直可以加我了解哦1253903671</div>
                          <div className="comment-operation" id="comment-operation-292337">
                            <div className="user-name">不开心</div>
                            <div className="post-time">今天下午 5:22</div>
                            <a className="reply expand-reply" data-commentid={292337} id="reply-292337">回复</a>
                            <a className="reply fold-reply" data-commentid={292337} id="fold-reply-292337" style={{display: 'none'}}>收起回复</a>
                          </div>
                        </div>
                      </li>
                      <li className="comment-cell" id="comment-292313">
                        <a className="avatar" title="挽箩">
                          <img src="http://img03.liwushuo.com/avatar/151015/08103fb10_a-w180" alt />
                        </a>
                        <div className="comment-body">
                          <div className="comment-content">那个防尘塞！！！好棒！求送！</div>
                          <div className="comment-operation" id="comment-operation-292313">
                            <div className="user-name">挽箩</div>
                            <div className="post-time">今天下午 3:21</div>
                            <a className="reply expand-reply" data-commentid={292313} id="reply-292313">回复</a>
                            <a className="reply fold-reply" data-commentid={292313} id="fold-reply-292313" style={{display: 'none'}}>收起回复</a>
                          </div>
                        </div>
                      </li>
                      <li className="comment-cell" id="comment-292191">
                        <a className="avatar" title="◎">
                          <img src="http://img02.liwushuo.com/avatar/150728/ba837e24e_a.png-w180" alt />
                        </a>
                        <div className="comment-body">
                          <div className="comment-content">不走心了</div>
                          <div className="comment-operation" id="comment-operation-292191">
                            <div className="user-name">◎</div>
                            <div className="post-time">今天早上 11:52</div>
                            <a className="reply expand-reply" data-commentid={292191} id="reply-292191">回复</a>
                            <a className="reply fold-reply" data-commentid={292191} id="fold-reply-292191" style={{display: 'none'}}>收起回复</a>
                          </div>
                        </div>
                      </li>
                      <li className="comment-cell" id="comment-292162">
                        <a className="avatar" title="绝版女神经">
                          <img src="http://img01.liwushuo.com/avatar/150406/8b70c9be4_a.png-w180" alt />
                        </a>
                        <div className="comment-body">
                          <div className="comment-content">充电宝不错</div>
                          <div className="comment-operation" id="comment-operation-292162">
                            <div className="user-name">绝版女神经</div>
                            <div className="post-time">今天早上 09:46</div>
                            <a className="reply expand-reply" data-commentid={292162} id="reply-292162">回复</a>
                            <a className="reply fold-reply" data-commentid={292162} id="fold-reply-292162" style={{display: 'none'}}>收起回复</a>
                          </div>
                        </div>
                      </li>
                      <li className="comment-cell" id="comment-292151">
                        <a className="avatar" title="安琪(⊙v⊙)">
                          <img src="http://img01.liwushuo.com/avatar/150514/e1ee29006_a.png-w180" alt />
                        </a>
                        <div className="comment-body">
                          <div className="comment-content">哼</div>
                          <div className="comment-operation" id="comment-operation-292151">
                            <div className="user-name">安琪(⊙v⊙)</div>
                            <div className="post-time">今天早上 08:04</div>
                            <a className="reply expand-reply" data-commentid={292151} id="reply-292151">回复</a>
                            <a className="reply fold-reply" data-commentid={292151} id="fold-reply-292151" style={{display: 'none'}}>收起回复</a>
                          </div>
                        </div>
                      </li>
                      <li className="comment-cell" id="comment-292150">
                        <a className="avatar" title="老心妖">
                          <img src="http://img03.liwushuo.com/image/140814/b6kgt7pfe_w.jpg-w180" alt />
                        </a>
                        <div className="comment-body">
                          <div className="comment-content">好</div>
                          <div className="comment-operation" id="comment-operation-292150">
                            <div className="user-name">老心妖</div>
                            <div className="post-time">今天早上 08:00</div>
                            <a className="reply expand-reply" data-commentid={292150} id="reply-292150">回复</a>
                            <a className="reply fold-reply" data-commentid={292150} id="fold-reply-292150" style={{display: 'none'}}>收起回复</a>
                          </div>
                        </div>
                      </li>
                      <li className="comment-cell" id="comment-292149">
                        <a className="avatar" title="原谅时光，记住爱">
                          <img src="http://img02.liwushuo.com/avatar/150128/2b4143d18_a.png-w180" alt />
                        </a>
                        <div className="comment-body">
                          <div className="comment-content">1</div>
                          <div className="comment-operation" id="comment-operation-292149">
                            <div className="user-name">原谅时光，记住爱</div>
                            <div className="post-time">今天早上 08:00</div>
                            <a className="reply expand-reply" data-commentid={292149} id="reply-292149">回复</a>
                            <a className="reply fold-reply" data-commentid={292149} id="fold-reply-292149" style={{display: 'none'}}>收起回复</a>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="loading load-tip" id="loading" style={{display: 'none'}}>正在加载中……</div>
                    <div className="comment-box">
                      <form onsubmit="return false;">
                        <textarea className="reply-editor" value={""} />
                        <button className="reply-sumit submit-button" onclick="submitComment();">提交评论</button>
                        <div className="cb-login-tip"><a className="btn-login-cb"> 登录 </a>参与评论</div>
                      </form>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>


          </div>
        </div>
      </DocumentTitle>
    );
  }

}
