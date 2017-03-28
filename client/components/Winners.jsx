import React from 'react'
import { connect } from 'react-redux'
import WinnerRow from './WinnerRow'

function Winners (props) {
  console.log('props winner is receiving ' + props);
  return (
    <div className='winners-section'>
      <h2>Winners</h2>
      <table>
        <tbody>
          {props.winnersData.map(winnerRec => {
            return (
              <WinnerRow name={winnerRec.name} score={winnerRec.score} key={winnerRec.id}/>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

//make a function which knows what part of the state we should use
function mapStateToProps(state) {
  console.log('the winners state', state.winners)
    return {
      winnersData: state.winners
    }
}

//give that function to connect (this will make a function which we can use to plug into Winners to provide all the data we need)
const provideCorrectProps = connect(mapStateToProps)
const connectedWinners = provideCorrectProps(Winners)

//Same:
export default connectedWinners
// export default = connect(mapStateToProps)(connectedWinners)

// Same:
//<WinnerRow name={winnerRec.name} score={winnerRec.score} key={winnerRec.id}/>
//<WinnerRow {...winnerRec} key={winnerRed.id}
