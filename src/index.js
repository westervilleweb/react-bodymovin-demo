import React, { Component } from 'react';
import bodymovin from 'bodymovin';
import { lifecycle } from 'recompose';

class BodyMovin extends Component {
  componentDidMount() {
    const {
      loop,
      autoplay,
      animation: animationData,
      bodymovinStyle
    } = this.props;

    this.animation = bodymovin.loadAnimation({
      loop: this.propsfalse,
      autoplay,
      renderer: 'svg',
      container: this.target,
      animationData: this.props.animation
    });

    this.animation.addEventListener('loopComplete', () => {
      if (!this.props.loop) {
        this.animation.stop();
      }
    });
  }

  componentWillUnmount() {
    this.animation.destroy();
  }

  play() {
    this.animation.play();
  }

  playSegment(index = 0) {
    this.animation.playSegment(index);
  }

  stop() {
    this.animation.stop();
  }

  render() {
    return (
      <div
        style={this.props.bodymovinStyle}
        ref={element => {
          this.target = element;
        }}
      />
    );
  }
}

BodyMovin.defaultProps = {
  loop: false,
  autoplay: false,
  play: false,
  bodymovinStyle: { width: '100%', height: '100%', background: '#000' }
};

export default BodyMovin;
