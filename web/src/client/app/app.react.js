import './app.styl';
import Component from 'react-pure-render/component';
import Footer from './footer.react';
import React, {PropTypes} from 'react';
import {mapDispatchToProps, mapStateToProps} from '../../../../common';
import {connect} from 'react-redux';

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    msg: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.actions.getUserInfo();
  }

  render() {

    // Use location pathname to ensure header is rerendered on url change, so
    // links update their active className.
    const {location: {pathname}, msg, users: {viewer}} = this.props;

    return (
      <div className="page">
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }

}
