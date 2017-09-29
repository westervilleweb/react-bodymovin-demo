import React from 'react'
import { lifecycle } from 'recompose';
import bodymovin from 'bodymovin';

let bodymovinRef = null;
let animationData = null;

const Bodymovin = ({animation}) => {
  animationData = animation;
  return (
    <div id='bodymovin' ref={(element) => { bodymovinRef = element; }} style={{width: '100px'}}></div>
  );
}

const lifecycleHooks = lifecycle({
  componentDidMount: () => {
    console.log(animationData);
    bodymovin.loadAnimation({
      container: bodymovinRef,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    })
  }
})
export default lifecycleHooks(Bodymovin);
