import React, {Component} from 'react'
import {render} from 'react-dom'

import Bodymovin from '../../src'

const Demo = () => (
  <div>
    <h1>react-bodymovin Demo</h1>
    <Bodymovin/>
  </div>
)

render(<Demo/>, document.querySelector('#demo'))
