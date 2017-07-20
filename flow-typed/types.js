// @flow

export type AlbumType = {
  userId: number,
  id: number,
  title: string
}

export type AlbumsDB = {
  albumsById: { [number]: Album },
  albumsAllIds: Array<number>
}

export type Photo = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export type State = {
  entities: {
    albums: AlbumsDB,
    photos: {
      photosById: { [number]: Photo },
      photosAllIds: Array<number>
    },
  },
  page: number
}

declare type ActionType = 'ADD_ALBUMS' | 'SET_PAGE' | 'ADD_ALBUM_PHOTOS'

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|}

export type Action =
  | ActionT<'ADD_ALBUMS', Array<Album>>
  | ActionT<'SET_PAGE', number>
  | ActionT<'ADD_ALBUM_PHOTOS', Array<Photo>>
