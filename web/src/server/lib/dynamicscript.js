/**
 * Created by yutao on 15/9/17.
 */

import { Component, Children, PropTypes } from 'react';
import withSideEffect from 'react-side-effect';

class DynamicScripts extends Component {
  render() {
    return Children.only(this.props.children);
  }
}

DynamicScripts.propTypes = {
  scripts: PropTypes.string.isRequired
};

function reducePropsToState(propsList) {
  var innermostProps = propsList[propsList.length - 1];
  if (innermostProps) {
    return innermostProps.scripts;
  }
}

function handleStateChangeOnClient(scripts) {
  //document.scripts = scripts || "";
}

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(DynamicScripts);
