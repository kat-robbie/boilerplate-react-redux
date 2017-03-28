import React from 'react'
import { connect } from 'react-redux'

import WinnerRow from './WinnerRow'

//
// TODO move this to containers folder
//

function Winners (props) { 
  console.log('props Winners is receiving', props)

  return (
    <div className='winner-section'>
      <h2>Winners</h2>
      <table>
        <tbody>
          {props.winnersData.map( winnerRecord => {
            return (
              <WinnerRow {...winnerRecord} key={winnerRecord.id} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

// make a function which knows what part of the state we should use
function mapStateToProps (state) {
  return {
    winnersData: state.winners
  }
}

// give that function to connect (this will make function which we can use to plug into Winners to provide all the data we need)

// const provideCorrectProps = connect(mapStateToProps)
// const connectedWinners = provideCorrectProps(Winners)

// export default connectedWinners 

export default connect(mapStateToProps)(Winners)


// same : 
// <WinnerRow {...winnerRecord} key={winnerRecord.id} />
// <WinnerRow name={winnerRecord.name} score={winnerRecord.score} key={winnerRecord.id} />
