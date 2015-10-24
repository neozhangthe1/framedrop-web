/**
 * Created by yutao on 15/10/21.
 */
import './badge.styl';
import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

export default class Badge extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired
  }

  render() {
    const {type} = this.props;

    var badge = null;
    switch(type) {
      case "product":
        badge = <div className="info-badge bg-color-blue">
          <i className="icon-package"> </i>
          </div>;
        break;
      case "fashion":
        badge = <div className="info-badge bg-color-blue">
          <i className="icon-t-shirt"> </i>
          <small>穿搭</small>
          </div>;
        break;
      case "food":
        badge = <div className="info-badge bg-color-blue">
          <i className="icon-food"> </i>
          </div>;
        break;
      case "home":
        badge = <div className="info-badge rgba-blue">
          <i className="icon-shop"> </i>
          </div>;
        break;
      case "location":
        badge = <div className="info-badge rgba-blue">
          <i className="icon-location"> </i>
          </div>;
        break;
    }

    return (<div >{badge}</div>);
  }

}
