// @flow

import React from 'react'
import { connect } from 'react-redux'
import { setPage } from '../../redux/actionCreators'
import './Pager.css'

const Pager = (props: {
  page: number,
  total: number,
  pageSize: number,
  setPage: Function
}) => {
  const totalPages = Math.ceil(props.total / props.pageSize)
  return (
    <div className="Pager">
      <button
        className="Pager__item"
        onClick={props.setPage.bind(this, 0)}
        disabled={props.page === 0}
      >
        First
      </button>
      <button
        className="Pager__item"
        onClick={props.setPage.bind(this, props.page - 1)}
        disabled={props.page === 0}
      >
        Prev
      </button>
      <span className="Pager__item">{props.page + 1} of {totalPages}</span>
      <button
        className="Pager__item"
        onClick={props.setPage.bind(this, props.page + 1)}
        disabled={props.page + 1 === totalPages}
      >
        Next
      </button>
      <button
        className="Pager__item"
        onClick={props.setPage.bind(this, totalPages - 1)}
        disabled={props.page + 1 === totalPages}
      >
        Last
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  page: state.page,
  total: state.entities.albums.albumsAllIds.length
})

const mapDispatchToProps = (dispatch: Function) => ({
  setPage(page) {
    dispatch(setPage(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Pager)
