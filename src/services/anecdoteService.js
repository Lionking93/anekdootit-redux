import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  console.log('Getting anecdotes!')
  const response = await axios.get(baseUrl)
  return response.data
} 

const addNew = async content => {
  const newAnecdote = {
    content,
    votes: 0
  }
  console.log(newAnecdote)
  const response = await axios.post(baseUrl, newAnecdote)
  return response.data
}

const voteAnecdote = async id => {
  const getResponse = await axios.get(`${baseUrl}/${id}`)
  const existingAnecdote = getResponse.data 
  
  const newAnecdote = {
    ...existingAnecdote,
    votes: existingAnecdote.votes + 1
  }

  const putResponse = await axios.put(`${baseUrl}/${id}`, newAnecdote)
  return putResponse.data
}

export default { getAll, addNew, voteAnecdote }