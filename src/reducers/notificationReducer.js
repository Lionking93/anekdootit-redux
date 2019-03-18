const initialState = {
  content: 'This is a notification',
  showNotification: false
}

const showNotification = (notification) => {
  return {
    type: 'SHOW',
    showNotification: true,
    notification
  }
}

const hideNotification = () => {
  return {
    type: 'HIDE',
    showNotification: false
  }
}

export const setNotification = (notification, timeout) => {
  return dispatch => {
    dispatch(showNotification(notification))
    
    setTimeout(() => {
      dispatch(hideNotification())
    }, timeout)
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