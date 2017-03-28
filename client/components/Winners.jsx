import React from 'react'

function Winners () {

  return (
    <div className='winners-section'>
      <h2>Winners</h2>
      <table>
        <tbody>
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
        </tbody>
      </table>
    </div>
  )
}

export default Winners
