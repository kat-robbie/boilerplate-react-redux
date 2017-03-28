const initialState = [
  { id: 71, name: 'Alanna', score: 21 },
  { id: 49, name: 'Mix', score: 12 },
  { id: 33, name: 'Don', score: 11 },
  { id: 32, name: 'Donna', score: 115 }
]

// This reducer doesn't really do anything yet
const winners = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

export default winners

