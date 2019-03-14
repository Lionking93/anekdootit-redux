import React from 'react';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { showNotification, hideNotification } from '../reducers/notificationReducer';

const AnecdoteForm = ({ store }) => {
  const add = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    store.dispatch(addAnecdote(content))
    store.dispatch(showNotification(`You added new anecdote: '${content}'`))

    setTimeout(() => {
      store.dispatch(hideNotification())
    }, 5000)

    event.target.anecdote.value = ''
  }


  return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name="anecdote" type="text" /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm