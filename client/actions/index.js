let nextWordId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const clearWords = () => {
  return {
    type: 'CLEAR_WORDS'
  }
}
