const words = (state = [], action) => {
  console.log(state, action)
  switch (action.type) {
    case 'ADD_WORD':
      const newState = [
        ...state,
        {
          id: action.id,
          word: action.word
        }
      ]
      return newState

    case 'CLEAR_WORDS':

      return []

    default:
      return state
  }
}

export default words
