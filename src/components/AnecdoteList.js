import React from 'react';
import { connect } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes

  const vote = (id) => {
    console.log('vote', id)
    props.voteAnecdote(id)
    
    const anecdote = anecdotes.find(a => a.id === id)
    console.log(anecdote)
    props.showNotification(`You voted '${anecdote.content}'`)
    setTimeout(() => {
      props.hideNotification()
    }, 5000)
  }

  return (
    <>
      {anecdotes
        .filter(anecdote => anecdote.content.toLowerCase().includes(props.filter.toLowerCase()))
        .map(anecdote =>
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  showNotification,
  hideNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList