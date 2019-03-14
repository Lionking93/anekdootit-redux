import React from 'react';

const App = (props) => {
  const store = props.store
  const anecdotes = props.store.getState()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    store.dispatch({
      type: 'ADD',
      data: { content }
    })

    event.target.anecdote.value = ''
  }

  const vote = (id) => {
    console.log('vote', id)
    store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" type="text" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
