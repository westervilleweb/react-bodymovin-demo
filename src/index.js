import React, { Component } from 'react'
import bodymovin from 'bodymovin';
import { lifecycle } from 'recompose';

export default class BodyMovin extends Component {
  componentDidMount() {
    bodymovin.loadAnimation({
      loop: true,
      autoplay: true,
      renderer: 'svg',
      container: this.target,
      animationData: this.props.animation,
    })
  }

  render() {
    return (
      <div
        style={{ width: '100px' }}
        ref={(element) => { this.target = element; }}
      />
    )
  }
}
