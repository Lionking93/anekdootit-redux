import anecdotes from '../services/anecdoteService';

const initialState = []

export const addAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdotes.addNew(content)
    dispatch({
      type: 'ADD',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const data = await anecdotes.voteAnecdote(id)
    dispatch({
      type: 'VOTE',
      data
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const retrievedAnecdotes = await anecdotes.getAll()
    dispatch({
      type: 'INIT',
      data: retrievedAnecdotes
    })
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
          a.id !== action.data.id ? a : action.data)
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