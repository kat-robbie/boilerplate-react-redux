const initialState = [
  { id: 71, name: 'Alana', score: 21 },
  { id: 49, name: 'Mix', score: 12 },
  { id: 33, name: 'Don', score: 11 },
  { id: 23, name: 'Meow', score: 33 }
]

//this reducer doesn't do anything yet
const winners = ( state = initialState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

export default winners
