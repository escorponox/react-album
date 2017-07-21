// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import type { RouterHistory } from 'react-router-dom'
import Spinner from '../spinner/Spinner'
import PhotoGrid from '../grid/PhotoGrid'
import './Album.css'

class Album extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isNaN(nextProps.albumId) && this.props.album !== nextProps.album
  }

  props: {
    albumId: number,
    album: AlbumType,
    history: RouterHistory
  }

  render() {
    return this.props.album
      ? <div className="Album">
          <div className="Album__box">
            <h1 className="Album__box-title">{this.props.album.title}</h1>
            <Link to="/">Back to Albums</Link>
            <PhotoGrid albumId={this.props.albumId} pageSize={20} />
            <Link to="/">Back to Albums</Link>
          </div>
        </div>
      : <Spinner />
  }
}

const mapStateToProps = (state, ownProps) => ({
  album: state.entities.albums.albumsById[ownProps.albumId]
})

export default connect(mapStateToProps)(Album)
