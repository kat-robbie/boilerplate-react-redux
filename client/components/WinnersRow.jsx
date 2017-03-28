import React from 'react'

function WinnersRow(props) {
  return (
    <tr key={props.id}>
      <td>{props.name}</td>
      <td>{props.score}</td>
      <td><button>+</button></td>
      <td><button>-</button></td>
    </tr>
  )
}

export default WinnersRow
