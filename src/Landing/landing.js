import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Landing extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <main>Welcome to the Giving Tree!</main>;
  }
}
