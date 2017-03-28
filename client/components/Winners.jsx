
import React from 'react'
import { connect } from 'react-redux'

import WinnersRow from './WinnersRow'

//Todo: move this to containers folder


function Winners (props) {
  console.log('props winner is recieving', props);

  return (
    <div className='winner-section'>
      <h2> Winners </h2>
      <table>
        <tbody>
          {props.winnersData.map( winnerRecord => {
            return (
              <WinnersRow name={winnerRecord.name} score={winnerRecord.score} key={winnerRecord.id} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

//make a function which knows what part of the state we should use
function mapStateToProps (state) {
  return {
    winnersData: state.winners
  }
}

//give that function to connect (this will make a function which we can use to plug into Winners to provide all the data we need)
// const provideCorrectProps = connect(mapStateToProps)
// const connectedWinners = provideCorrectProps(Winners)
//
// export default connectedWinners

//above is another way to write this ^^, but the best way is how it is below
export default connect(mapStateToProps)(Winners)

//same :
//<WinnersRow {...winnerRecord} key={winnerRecord.id} />
//<WinnersRow name={winnerRecord.name} score={winnerRecord.score} key={winnerRecord.id} />
