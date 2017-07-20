// @flow

import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import CSSTransition from 'react-transition-group/CSSTransition'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import AlbumGrid from './components/grid/AlbumGrid'
import Album from './components/album/Album'
import './transitions.css'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Intro />
          <Route path="/" component={() => <AlbumGrid pageSize={10} />} />
          <Route
            path="/:albumId(\d+)?"
            render={props => (
              <CSSTransition
                appear
                timeout={300}
                in={!!props.match.params.albumId}
                classNames="fade-scale"
                mountOnEnter
                unmountOnExit
              >
                <Album albumId={parseInt(props.match.params.albumId, 10)}/>
              </CSSTransition>
            )}
          />
        </div>
      </Provider>
    )
  }
}

export default App
