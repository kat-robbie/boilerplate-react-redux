import React from 'react'
import {connect} from 'react-redux'
import WinnerRow from '../components/WinnerRow'

function Winners (props) {

  return (
    <div className='winner-section'>
      <h2>Winners</h2>
      <table>
        <tbody>
          {props.winnersData.map(function(winnerRecord){
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
// create top level state and map the props to it.
function mapStateToProps (state){
  return {
    winnersData: state.winners
  }
}

// give the above function to connect (this will make a function which we can use to plug into Winners to provide all the data we need)

// const provideCorrectProps = connect(mapStateToProps)
// const connectedWinners = provideCorrectProps(Winners)

// export default connectedWinners

export default connect(mapStateToProps)(Winners)




// <WinnerRow name={winnerRecord.name} score={winnerRecord.score} key={winnerRecord.id}/>
// The above is the same as the shorthand code on line 19
