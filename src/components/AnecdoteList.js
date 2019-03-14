import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes

  const vote = (id) => {
    console.log('vote', id)
    store.dispatch(voteAnecdote(id))
    
    const anecdote = anecdotes.find(a => a.id === id)
    console.log(anecdote)
    store.dispatch(showNotification(`You voted '${anecdote.content}'`))
    setTimeout(() => {
      store.dispatch(hideNotification())
    }, 5000)
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList