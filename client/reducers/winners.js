const intitalState = [
  {id: 71, name: 'Dan', score: 21},
  {id: 49, name: 'Mix', score: 12},
  {id: 36, name: 'Don', score: 11}
]

//The reducer takes two things need to be passed, state and an action - if the state isn't passed use the initial state.
// Doesn't do anyting yet
const winners = (state = intitalState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

export default winners


//once completed add to reducers/index.js
