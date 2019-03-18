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

export default { getAll, addNew }