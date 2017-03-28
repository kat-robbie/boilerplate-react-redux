import React from 'react'
import { connect } from 'react-redux'
import WinnerRow from './rows'

function Winners (props) {
console.log('props Winners is recieving', props);
  return (
    <div className='winner-section'>
      <h1> Winner </h1>
      <table>
        <tbody>
          {props.winnersData.map(winnerRecord => {
            return (
              <WinnerRow {...winnerRecord} key={winnerRecord.id} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

//make a function which knowswhat part fo the state we should use
function mapStateToProps (state) {
  return{
    winnersData: state.winners
  }
}
//give that function to connect (this will make a function which we can use to plug into Winners to provide all the data we need)
const provideCorrectProps = connect(mapStateToProps)
const connectedWinners = provideCorrectProps(Winners)
//
export default connectedWinners

// export default connect(mapStateToProps)(Winners)


//<WinnerRow name={winnderRecord.name} etc the same as when refactored.
// const name = 'Pauline'
// const score = 21

// const name = 'Mix'
// const score = 12
// const name = 'Don'
// const score = 11
