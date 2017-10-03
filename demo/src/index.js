import React, { Component } from 'react';
import { render } from 'react-dom';
import Bodymovin from '../../src';
import animationData from './liftoff-animation';

class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const play = () => {
      this.bodymovin.animation.play();
    };

    return (
      <div>
        <h1>react-bodymovin Demo</h1>
        <Bodymovin
          animation={animationData}
          ref={bodymovin => {
            this.bodymovin = bodymovin;
          }}
        />
        <button
          onClick={() => {
            this.bodymovin.animation.play();
          }}
        >
          Play
        </button>
        <button onClick={() => this.bodymovin.animation.stop()}>Stop</button>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
