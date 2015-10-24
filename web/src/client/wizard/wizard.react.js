/**
 * Created by yutao on 15/10/23.
 */
import "./wizard.styl"
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames'
import {List, Range, Record} from 'immutable';

export default class Wizard extends Component {

  static propTypes = {
    //data: React.PropTypes.object.isRequired
  }


  componentDidMount() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
  }


  render() {
    //const {data} = this.props;


    return (
      <div className="wizard-wrap">
        <div className="wizard-main-btn">
          <div className="wizard-add-btn-wrap">
            <button className="btn wizard-add-btn rounded-x push" type="button" data-container="body"
                    data-toggle="popover" data-placement="left"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
              <i className="icon-genius"/>
            </button>
          </div>
          {/*<div className="buttonInoutWrapper helpButtonWrapper">
           <button
           className="Button DropdownButton Module UserEducationDropdownButton borderless moreFooter footerIcon userEducationTutorialButton"
           data-element-type={245} type="button">
           <em />
           <span className="accessibilityText">More</span></button>
           <button
           className="Button DropdownButton Module UserEducationDropdownButton borderless moreFooter footerIcon emptyTutorialButton"
           data-element-type={245} type="button">
           <em />
           <span className="accessibilityText">More</span></button>
           </div>*/}
        </div>
        <div className="wizard-menu">
          <span className="wizard-menu-caret"></span>
          <div className="wizard-menu-btn-wrap">
            <button className="wizard-menu-btn push">
              <i className="icon-camera2"> </i>发布图片
            </button>
            <button className="wizard-menu-btn push">
              <i className="icon-video"> </i>发布影视截图</button>
            <button className="wizard-menu-btn push">
              <i className="icon-telescope"> </i>找同款商品/地点</button>
          </div>
        </div>
      </div>

    );
  }

}
