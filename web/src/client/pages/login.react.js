/**
 * Created by yutao on 15/10/16.
 */
import "./login.styl"
import DocumentTitle from 'react-document-title';
import Component from 'react-pure-render/component';
import DynamicScripts from '../../server/lib/dynamicscript.js'
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';
import ReactDom from 'react-dom';
import Router from "react-router"

export default class Login extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    this.props.actions.login(
      ReactDom.findDOMNode(this.refs.name).value,
      ReactDom.findDOMNode(this.refs.pass).value
    ).then(({error, payload}) => {
        if (error)
          console.log(payload);
        else
          this.redirectAfterLogin();
      });
  }

  // TODO: Use redux-react-router.
  redirectAfterLogin() {
    const {history, location} = this.props;
    if (location.state && location.state.nextPathname)
      history.replaceState(null, location.state.nextPathname);
    else
      history.replaceState(null, '/');
  }

  render() {
    const {msg, auth: {login}} = this.props;
    const scripts = `
      <script type="text/javascript" src="/js/backstretch/jquery.backstretch.min.js"></script>
      <script type="text/javascript">
        $.backstretch([
          "/ui/unify/img/bg/19.jpg",
          "/ui/unify/img/bg/18.jpg"
          ], {
            fade: 1000,
            duration: 7000
        });
    </script>
    `;

    return (
      <DocumentTitle title={msg.login.title}>
        <DynamicScripts scripts={scripts}>
          <div className="container">
            {/*Reg Block*/}
            <div className="reg-block">
              <div className="reg-block-header">
                <h2>Sign In</h2>
                <ul className="social-icons text-center">
                  <li><a className="rounded-x social_facebook" data-original-title="Facebook" href="#" /></li>
                  <li><a className="rounded-x social_twitter" data-original-title="Twitter" href="#" /></li>
                  <li><a className="rounded-x social_googleplus" data-original-title="Google Plus" href="#" /></li>
                  <li><a className="rounded-x social_linkedin" data-original-title="Linkedin" href="#" /></li>
                </ul>
                <p>Don't Have Account? Click <a className="color-green" href="page_registration1.html">Sign Up</a> to registration.</p>
              </div>
              <div className="input-group margin-bottom-20">
                <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                <input ref="name" type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="input-group margin-bottom-20">
                <span className="input-group-addon"><i className="fa fa-lock" /></span>
                <input ref="pass" type="text" className="form-control" placeholder="Password" />
              </div>
              <hr />
              <div className="checkbox">
                <label>
                  <input type="checkbox" />
                  <p>Always stay signed in</p>
                </label>
              </div>
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <button type="submit" className="btn-u btn-block" onClick={this.login}>Log In</button>
                </div>
              </div>
            </div>
            {/*End Reg Block*/}
          </div>
        </DynamicScripts>
      </DocumentTitle>
    );
  }

}
