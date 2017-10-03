import React, { Component } from 'react';
import { render } from 'react-dom';
import Bodymovin from '../../src';
import animationData from './liftoff-animation';

import './devices.min.css';
import './button-reset.css';
import './button-launch.css';

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
        <div
          className="marvel-device iphone8 silver"
          style={{ margin: '0 auto', display: 'block' }}
        >
          <div className="top-bar" />
          <div className="sleep" />
          <div className="volume" />
          <div className="camera" />
          <div className="sensor" />
          <div className="speaker" />
          <div
            className="screen"
            style={{ backgroundImage: 'url(public/bckgd.svg)' }}
          >
            <Bodymovin
              animation={animationData}
              bodymovinStyle={{
                width: '375px',
                height: '667px'
              }}
              ref={bodymovin => {
                this.bodymovin = bodymovin;
              }}
            />
          </div>
          <div className="home" />
          <div className="bottom-bar" />
        </div>
        <audio id="launchAudio">
          <source src="public/launch.mp3" type="audio/ogg" />
        </audio>
        <button
          className="btn-reset buttonLaunch"
          onClick={() => {
            this.bodymovin.animation.play();
            document.getElementById('launchAudio').play();
          }}
        />
        <button onClick={() => this.bodymovin.animation.stop()}>Stop</button>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
