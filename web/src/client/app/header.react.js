import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class DiscoverNav extends Component {
  render() {
    return (
      <div className="secondary-nav">
        <div className="container container-space">
          <div className="menu-container row">
            <ul className="nav navbar-nav col-md-6  pull-left">
              <li className={"nav-item " + ((this.props.tab === "product") ? "active" : "")}>
                <a href="/frame">
                  <i className="icon-photo"></i>
                  帧
                </a>
              </li>
              <li className={"nav-item " + ((this.props.tab === "product") ? "active" : "")}>
                <a href="/product">
                  <i className="icon-package"></i>
                  东西
                </a>
              </li>
              <li className={"nav-item " + ((this.props.tab === "fashion") ? "active" : "")}>
                <a href="/fashion">
                  <i className="icon-t-shirt"></i>
                  穿搭
                </a>
              </li>
              <li className={"nav-item " + ((this.props.tab === "food") ? "active" : "")}>
                <a href="/food">
                  <i className="icon-food"></i>
                  美食
                </a>
              </li>
              <li className={"nav-item " + ((this.props.tab === "fashion") ? "active" : "")}>
                <a href="/fashion">
                  <i className="icon-shop"></i>
                  家居
                </a>
              </li>
              <li className={"nav-item " + ((this.props.tab === "location") ? "active" : "")}>
                <a href="/location">
                  <i className="icon-location"></i>
                  地点
                </a>
              </li>
              {/*<li className={(this.props.tab === "queue") ? "active" : ""}>
               <a href="/queue">
               队列
               </a>
               </li>*/}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default class Header extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    viewer: PropTypes.object,
    tab: PropTypes.string
  }

  render() {
    const {msg, viewer, tab} = this.props;

    var elem = "";
    if (viewer)
      if (viewer.username.length > 0) {
        elem = <a className="user-nav">
          <img src={viewer.avatar} className="rounded-x" width="40" height="40" />
        </a>;
      } else {
        elem = <a className="btn-u btn-u-sea login-btn push" href="/login">
          <i className="icon-bulb" style={{"marginRight": 0}}> </i>
          登陆
        </a>;
      }


    return (
      <div className="main-header ">
        <div className="navbar mega-menu" role="navigation">
          <div className="container container-space">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="menu-container ">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>
              {/* Navbar Brand */}
              <div className="navbar-brand">
                <a href="/">
                  <img className="shrink-logo" src="/assets/img/framedrop.png" alt="Logo"/>
                  <img className="expand-logo" src="/assets/img/framedrop-white.png" alt="Logo"/>
                </a>
              </div>
              {/* ENd Navbar Brand */}
              {/*
              <div className="header-inner-right">
                <ul className="menu-icons-list">
                  <li className="menu-icons">
                    <i className="menu-icons-style search search-close search-btn fa fa-search"/>

                    <div className="search-open">
                      <input type="text" className="animated fadeIn form-control" placeholder="想要找什么 ..."/>
                    </div>
                  </li>
                </ul>
              </div>
               */}
              <div className="header-inner-right user-nav-wrap">
                {elem}
              </div>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse navbar-responsive-collapse">
              <div className="menu-container">
                <ul className="nav navbar-nav main-nav">
                  <li className={(this.props.tab === "home") ? "active" : ""}>
                    <a href="/" className="push">
                      <i className="fa fa-home fa-lg"> </i>
                      首页
                    </a>
                  </li>
                  <li className={(this.props.tab === "discover") ? "active" : ""}>
                    <a href="/discover" className="push">
                      <i className="fa fa-compass fa-lg"> </i>
                      发现
                    </a>
                  </li>

                  <li className={(this.props.tab === "billboard") ? "active" : ""}>
                    <a href="/billboard" className="push">
                      <i className="fa fa-newspaper-o fa-lg"> </i>
                      小报
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*/navbar-collapse*/}
          </div>
        </div>

        {/*(this.props.tab != "discover") ?  "" : <DiscoverNav/> */}
      </div>
    );
  }

}
