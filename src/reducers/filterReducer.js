const initialState = ''

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

const reducer = (state = initialState, action) => {
  console.log('Filter reducer state', state)
  console.log('Filter reducer action', action)

  switch (action.type) {
    case 'SET_FILTER':
      return state = action.filter
    default:
      return state
  }
}

export default reducer