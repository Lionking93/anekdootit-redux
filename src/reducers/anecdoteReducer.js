const initialState = []

export const addAnecdote = data => {
  return {
    type: 'ADD',
    data
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT',
    data: anecdotes
  }
}

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const anecdote = state.find(a => a.id === action.data.id)
      return state
        .map(a => 
          a.id !== action.data.id ? a : { ...anecdote, votes: anecdote.votes + 1 })
        .sort((a, b) => a.votes < b.votes)
    case 'ADD':
      const newAnecdote = action.data
      console.log('New anecdote', newAnecdote)
      return state.concat(newAnecdote)
    case 'INIT':
      console.log('Initting:', action.data)
      return action.data
    default:
  }

  return state
}

export default reducer