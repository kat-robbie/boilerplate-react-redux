const initialState =[

  { id: 71, name: 'Pauline', score: 21 },
  { id: 23, name: 'Mix', score: 12 },
  { id: 12, name: 'Don', score: 11 }
]
//This reducer doesn't really do anything yet
const winners = (state = initialState, action) => {

  switch (action.type) {
    default:
    return state
  }
}

export default winners
