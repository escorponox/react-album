// @flow

import { SET_PAGE, ADD_ALBUMS, ADD_ALBUM_PHOTOS } from './actions'

export function setPage(page: number) {
  return { type: SET_PAGE, payload: page }
}

export function addAlbums(albums: Array<Album>) {
  return { type: ADD_ALBUMS, payload: albums }
}

export function addAlbumPhotos(photos: Array<Photo>) {
  return { type: ADD_ALBUM_PHOTOS, payload: photos }
}
