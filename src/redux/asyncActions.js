// @flow

import axios from 'axios'
import { addAlbums, addAlbumPhotos } from './actionCreators'

export default function getAlbumList() {
  return (dispatch: Function) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((response: { data: Array<Album> }) =>
        dispatch(addAlbums(response.data))
      )
      .then(action =>
        action.payload.forEach((album) => {
          axios
            .get(
              `http://jsonplaceholder.typicode.com/albums/${album.id}/photos`
            )
            .then((response: { data: Array<Photo> }) => {
              dispatch(addAlbumPhotos(response.data))
            })
        })
      )
      .catch(error => {
        console.error('axios error', error) // eslint-disable-line no-console
      })
  }
}
