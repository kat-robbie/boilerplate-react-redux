import React from 'react'
import WinnerRow from './rows'

function Winners () {

  const winnersData =[

    { id: 71, name: 'Pauline', score: 21 },
    { id: 23, name: 'Mix', score: 12 },
    { id: 12, name: 'Don', score: 11 }
  ]

  // const name = 'Pauline'
  // const score = 21

  // const name = 'Mix'
  // const score = 12
  // const name = 'Don'
  // const score = 11


  return (
    <div className='winner-section'>
      <h1> Winner </h1>
      <table>
        <tbody>
          {winnersData.map(winnerRecord => {
            return (
              <WinnerRow name={winnerRecord.name} score={winnerRecord.score} key={winnerRecord.id} />
            )
          })
        }

        </tbody>


      </table>

    </div>

  )

}

export default Winners
