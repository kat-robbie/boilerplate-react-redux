import React from 'react'
import { connect } from 'react-redux'
import { clearWords } from '../actions'

function ClearWords (props) {
  const dispatch = props.dispatch

  return (
    <button
      onClick={e => { clearWord(e, dispatch) }}>Clear
    </button>
  )
}

function clearWord (e , dispatch) {
  dispatch(clearWords())
}

const provideCorrectProps = connect()
const connectedClearWords = provideCorrectProps(ClearWords)

export default connectedClearWords
