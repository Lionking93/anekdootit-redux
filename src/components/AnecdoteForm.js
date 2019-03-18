import React from 'react';
import { connect } from 'react-redux';
import anecdotes from '../services/anecdoteService';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { showNotification, hideNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const add = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    
    anecdotes.addNew(content).then(newAnecdote => {
      props.addAnecdote(newAnecdote)
      
      props.showNotification(`You added new anecdote: '${content}'`)

      setTimeout(() => {
        props.hideNotification()
      }, 5000)
      
      
    })  
    
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

const mapDispatchToProps = {
  addAnecdote,
  showNotification,
  hideNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm