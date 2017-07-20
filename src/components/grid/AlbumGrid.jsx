// @flow

import React from 'react'
import { connect } from 'react-redux'
import { setPage } from '../../redux/actionCreators'
import getAlbumList from '../../redux/asyncActions'
import { getVisibleAlbums } from '../../redux/reducers'
import Spinner from '../spinner/Spinner'
import AlbumCard from '../cards/AlbumCard'
import Pager from '../pager/Pager'
import './Grid.css'

class AlbumGrid extends React.Component {
  componentDidMount() {
    if (this.props.albums.length === 0) {
      this.props.getAlbumList()
    }
  }

  props: {
    albums: Array<Album>,
    pageSize?: number,
    getAlbumList: Function
  }

  static defaultProps = {
    pageSize: 20
  }

  render() {
    return (
      <div className="Grid">
        <h2 className="Grid__title">Albums</h2>
        {this.props.albums.length === 0
          ? <Spinner />
          : <div className="Grid__album-container">
              {this.props.albums.map(album =>
                <AlbumCard {...album} key={album.id} />
              )}
            </div>}
        <Pager pageSize={this.props.pageSize} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { albums: getVisibleAlbums(state, ownProps.pageSize) }
}

const mapDispatchToProps = (dispatch: Function) => ({
  getAlbumList() {
    dispatch(getAlbumList())
  },
  setPage(page) {
    dispatch(setPage(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumGrid)
