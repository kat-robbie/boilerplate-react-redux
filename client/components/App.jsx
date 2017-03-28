import React from 'react'

import AddWord from '../containers/AddWord'
import Words from '../containers/Words'
import Winners from '../containers/Winners'

function App (props) {
  return (
    <div className='app-container'>
      <Words />
      <AddWord />
      <Winners />
    </div>
  )
}

export default App
