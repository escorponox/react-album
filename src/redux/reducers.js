// @flow

import { combineReducers } from 'redux'
import { ADD_ALBUMS, SET_PAGE, ADD_ALBUM_PHOTOS } from './actions'

const albumsById = (state = {}, action: Action) => {
  switch (action.type) {
    case ADD_ALBUMS:
      return {
        ...state,
        ...action.payload.reduce((acc, curr) => {
          acc[curr.id] = curr
          return acc
        }, {})
      }
    default:
      return state
  }
}

const albumsAllIds = (state = [], action: Action) => {
  switch (action.type) {
    case ADD_ALBUMS:
      return [...state, ...action.payload.map(album => album.id)]
    default:
      return state
  }
}

const albums = combineReducers({
  albumsById,
  albumsAllIds
})

const photosById = (state = {}, action: Action) => {
  switch (action.type) {
    case ADD_ALBUM_PHOTOS:
      return {
        ...state,
        ...action.payload.reduce((acc, curr) => {
          acc[curr.id] = curr
          return acc
        }, {})
      }
    default:
      return state
  }
}

const photosAllIds = (state = [], action: Action) => {
  switch (action.type) {
    case ADD_ALBUM_PHOTOS:
      return [...state, ...action.payload.map(photo => photo.id)]
    default:
      return state
  }
}

const photos = combineReducers({
  photosById,
  photosAllIds
})

const entities = combineReducers({
  albums,
  photos
})

const page = (state = 0, action: Action) => {
  if (action.type === SET_PAGE) {
    return action.payload
  }
  return state
}

const rootReducer = combineReducers({ entities, page })

export default rootReducer

const getAllAlbums = (state: State) =>
  state.entities.albums.albumsAllIds.map(
    id => state.entities.albums.albumsById[id]
  )
const getAllPhotos = state =>
  state.entities.photos.photosAllIds.map(
    id => state.entities.photos.photosById[id]
  )

export const getVisibleAlbums = (state: State, pageSize: number) =>
  getAllAlbums(state).filter(
    (album, index) =>
      index >= state.page * pageSize && index < (state.page + 1) * pageSize
  )

export const getVisiblePhotos = (state: State, albumId: number) =>
  getAllPhotos(state).filter(photo => photo.albumId === albumId)

export const getAlbumFirstPhoto = (state: State, albumId: number) =>
  getAllPhotos(state).find(photo => photo.albumId === albumId)
