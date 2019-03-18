import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';

const App = (props) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {// props.store.getState().notification.showNotification && <Notification store={props.store} /> 
      }
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
