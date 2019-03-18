import React from 'react';
import { connect } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes

  const vote = anecdote => {
    console.log('vote', anecdote.id)
    props.voteAnecdote(anecdote.id)
    
    console.log(anecdote)
    props.showNotification(`You voted '${anecdote.content}'`)
    setTimeout(() => {
      props.hideNotification()
    }, 5000)
  }

  return (
    <>
      {props.anecdotesToShow.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
      )}
    </>
  )
}

const anecdotesToShow = ({ anecdotes, filter }) => {
  return anecdotes
    .filter(anecdote => 
      anecdote.content.toLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    anecdotesToShow: anecdotesToShow({ 
      anecdotes: state.anecdotes, 
      filter: state.filter 
    })
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  showNotification,
  hideNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList