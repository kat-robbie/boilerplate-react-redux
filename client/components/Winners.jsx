import React from 'react'

function Winners () {

  const winnersData = [
    {id: 1, name: 'Aidan', score: 21},
    {id: 2, name: 'Mix', score: 12},
    {id: 3, name: 'Don', score: 11}
  ]

  return (
    <div className='winners-section'>
      <h2>Winners</h2>
      <table>
        <tbody>
          {winnersData.map(winnerRec => {
            return (
              <tr key={winnerRec.id}>
                <td>{winnerRec.name}</td>
                <td>{winnerRec.score}</td>
                <td><button>+</button></td>
                <td><button>-</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Winners
