import React, { useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

export const AuthContext = React.createContext([])

export const AuthProvider = (props) => {
  const spotify = new SpotifyWebApi()
  const [currentPlaylist, setCurrentPlaylist] = useState('4DarFQlBxRgREKobXciazO')

  return (
    <AuthContext.Provider value={{ spotify, setCurrentPlaylist, currentPlaylist }}>
      {props.children}
    </AuthContext.Provider>
  )
}
