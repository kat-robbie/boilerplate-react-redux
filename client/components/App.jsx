import React from 'react'

import AddWord from '../containers/AddWord'
import Words from '../containers/Words'

function App (props) {
  return (
    <div className='app-container'>
      <Words />
      <AddWord />
      <div className="winnersSection">
        <h2>Winners</h2>
          <table class="table">
            <tr>
              <td>Mix</td>
              <td>12</td>
              <td><button>+</button></td>
              <td><button>-</button></td>
            </tr>
            <tr>
              <td>Don</td>
              <td>11</td>
              <td><button>+</button></td>
              <td><button>-</button></td>
            </tr>
          </table>
      </div>
    </div>
  )
}

export default App
