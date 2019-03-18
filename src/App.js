import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import anecdotes from './services/anecdoteService';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import { initializeAnecdotes } from './reducers/anecdoteReducer';
import Filter from './components/Filter';

const App = (props) => {
  useEffect(() => {
    anecdotes.getAll().then(retrievedAnecdotes => {
      console.log('Retrieved anecdotes', retrievedAnecdotes)
      props.initializeAnecdotes(retrievedAnecdotes)
    })
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default connect(null, { initializeAnecdotes })(App)
