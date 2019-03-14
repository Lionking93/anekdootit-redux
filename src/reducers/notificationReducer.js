const initialState = 'This is a notification'

const reducer = (state = initialState, action) => {
  console.log(state)
  return state
}

export default reducer