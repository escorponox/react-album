import React from 'react'
import gif from './spinner.gif'

const Spinner = (props: { size?: number }) =>
  <img
    style={{ width: `${props.size}px`, height: `${props.size}px` }}
    src={gif}
    alt="loading indicator"
  />

Spinner.defaultProps = {
  size: 64
}

export default Spinner
