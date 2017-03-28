import React from 'react'
import {connect} from 'react-redux'

import WinnersRow from './WinnersRow'

function Winners(props) {

  return (
    <div className="winnersSection">
      <h2>Winners</h2>
        <table>
          <tbody>
          {props.winnersData.map( (winnersRecord) => {
            return (
              <WinnersRow name={winnersRecord.name} score={winnersRecord.score} key={winnersRecord.id} />
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

//give that function to connect (this will make dunctrion which we can use to plug into Winners to provide all the data we need)
// const provideCorrectProps = connect(mapStateToProps)
// const connectedWinners = provideCorrectProps(Winners)

// export default connectedWinners

export default connect(mapStateToProps)(Winners)

  // <WinnersRow {name={winnersRecord.name} score={winnersRecord.score} key={winnersRecord.id}} />
