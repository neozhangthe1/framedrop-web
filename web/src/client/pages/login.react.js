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

export default class Login extends Component {

  static propTypes = {
  }

  render() {
    const {msg} = this.props;
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
                <input type="text" className="form-control" placeholder="Email" />
              </div>
              <div className="input-group margin-bottom-20">
                <span className="input-group-addon"><i className="fa fa-lock" /></span>
                <input type="text" className="form-control" placeholder="Password" />
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
                  <button type="submit" className="btn-u btn-block">Log In</button>
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
