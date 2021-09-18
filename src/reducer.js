export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  items: null,
  token: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'SET_PLAYLIST':
      return {
        ...state,
        playlists: action.playlists,
      }
    case 'SET_DISCOVER_WEEKKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
    case 'Token':
      return {
        newToken: action.newToken,
      }
    default:
      return state
  }
}

export default reducer
