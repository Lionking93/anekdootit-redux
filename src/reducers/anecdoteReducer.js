const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = []

export const addAnecdote = (content) => {
  return {
    type: 'ADD',
    data: { content }
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
      const newAnecdote = asObject(action.data.content)
      return state.concat(newAnecdote)
    case 'INIT':
      console.log('Initting:', action.data)
      return action.data
    default:
  }

  return state
}

export default reducer