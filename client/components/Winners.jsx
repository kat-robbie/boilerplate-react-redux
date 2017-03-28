import React from 'react'
import {connect} from 'react-redux'

import WinnerRow from './WinnerRow'

function Winners (props) {
  return (
    <div>
      <h2>Winners</h2>
      <div className="winners-section">
        <table>
          <tbody>
            {props.winnersData.map( winnerLog => {
              return(
                <WinnerRow {...winnerLog} key={winnerLog.id} />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    winnersData: state.winners
  }
}

//const provideCorrectProps = connect(mapStateToProps)

//const connectedWinners = provideCorrectProps(Winners)

//export default connectedWinners

export default connect(mapStateToProps)(Winners)

//<WinnerRow name={winnerLog.name} score={winnerLog.score} key={winnerLog.id} />
