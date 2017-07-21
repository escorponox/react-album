import React from 'react'
import './Intro.css'

const Intro = () =>
  <p className="Intro">
    This is a demo album with{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/facebookincubator/create-react-app"
    >
      Create React App
    </a>,{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/ReactTraining/react-router"
    >
      React Router
    </a>,{' '}
    <a target="_blank" rel="noopener noreferrer" href="https://flow.org/">
      Flow
    </a>{' '}
    and{' '}
    <a target="_blank" rel="noopener noreferrer" href="http://redux.js.org/">
      Redux
    </a>. The purpose of this app is to play with that tech stack, please don't
    bother if it is not perfectly responsive.
  </p>
export default Intro
