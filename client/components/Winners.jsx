import React from 'react'
import WinnerRow from './WinnerRow'

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
              <WinnerRow name={winnerRec.name} score={winnerRec.score} key={winnerRec.id}/>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Winners

// Same:
//<WinnerRow name={winnerRec.name} score={winnerRec.score} key={winnerRec.id}/>
//<WinnerRow {...winnerRec} key={winnerRed.id}
