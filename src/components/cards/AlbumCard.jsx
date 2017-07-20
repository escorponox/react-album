// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAlbumFirstPhoto } from '../../redux/reducers'
import ImagePlaceHolder from './ImagePlaceholder'
import './AlbumCard.css'

const AlbumCard = (props: AlbumType) => {
  let albumThumbnailSpace
  if (props.thumbnailUrl) {
    albumThumbnailSpace = <img src={props.thumbnailUrl} alt={props.title} />
  } else {
    albumThumbnailSpace = <ImagePlaceHolder />
  }

  return (
    <Link to={`/${props.id}`} className="AlbumCard" >
      <div>
        <h3 className="AlbumCard__title" title={props.title}>
          {props.title}
        </h3>
        {albumThumbnailSpace}
      </div>
    </Link>
  )
}

const mapStateToProps = (state, ownProps) => {
  const albumFirstPhoto = getAlbumFirstPhoto(state, ownProps.id)
  return {
    thumbnailUrl: albumFirstPhoto ? albumFirstPhoto.thumbnailUrl : ''
  }
}

export default connect(mapStateToProps)(AlbumCard)
