const initialState = {
  content: 'This is a notification',
  showNotification: false
}

export const showNotification = (notification) => {
  return {
    type: 'SHOW',
    showNotification: true,
    notification
  }
}

export const hideNotification = (id) => {
  return {
    type: 'HIDE',
    showNotification: false
  }
}

const reducer = (state = initialState, action) => {
  console.log(state)
  console.log(action)

  switch (action.type) {
    case 'SHOW':
      return { content: action.notification, showNotification: action.showNotification }
    case 'HIDE':
      return { ...state, showNotification: action.showNotification }
    default:
  }

  return state
}

export default reducer