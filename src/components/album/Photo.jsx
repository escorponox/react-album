import React from 'react'

const Photo = props =>
  <div>
    <h4>{props.title}</h4>
    <img src={props.url} alt={props.title} />
  </div>

export default Photo
