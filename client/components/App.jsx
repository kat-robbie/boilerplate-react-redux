import React from 'react'

import AddWord from '../containers/AddWord'
import Words from '../containers/Words'
import ClearWords from '../containers/ClearWords'

function App (props) {
  return (
    <div className='app-container'>
      <Words />
      <AddWord />
      <ClearWords />
    </div>
  )
}

export default App
