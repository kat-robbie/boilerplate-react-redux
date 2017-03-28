import React from 'react'
import Winners from './Winners.jsx'

import AddWord from '../containers/AddWord'
import Words from '../containers/Words'

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
