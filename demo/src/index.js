import React, {Component} from 'react'
import {render} from 'react-dom'

import Bodymovin from '../../src'
import animationData from '../../src/checked_done_data';

console.log(animationData);
const Demo = () => (
  <div>
    <h1>react-bodymovin Demo</h1>
    <Bodymovin animation={animationData} />
  </div>
)

render(<Demo/>, document.querySelector('#demo'))
