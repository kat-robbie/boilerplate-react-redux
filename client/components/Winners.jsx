import React from 'react'
import WinnerRow from './WinnerRow'

function Winners () {

const winnersData = [
  {id: 71, name: 'Dan', score: 21},
  {id: 49, name: 'Mix', score: 12},
  {id: 36, name: 'Don', score: 11}
]

  return (
    <div className='winner-section'>
      <h2>Winners</h2>
      <table>
        <tbody>
          {winnersData.map(function(winnerRecord){
            return (
              <WinnerRow {...winnerRecord} key={winnerRecord.id}/>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

// make a function which knows what part of the state we should use

// give that function to connect (this will make a function which we can use to plug into Winners to provide all the data we need)


export default Winners


// <WinnerRow name={winnerRecord.name} score={winnerRecord.score} key={winnerRecord.id}/>
// The above is the same as the shorthand code on line 19
