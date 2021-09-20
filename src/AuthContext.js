import React, { useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

export const AuthContext = React.createContext([])

export const AuthProvider = (props) => {
  const spotify = new SpotifyWebApi()
  const [currentPlaylist, setCurrentPlaylist] = useState('37i9dQZEVXcDsnG8902Yis')
  const [currentTrack, setCurrentTrack] = useState({})
  const [currentFooter, setcurrenFooter] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        spotify,
        setCurrentPlaylist,
        currentPlaylist,
        currentTrack,
        setCurrentTrack,
        currentFooter,
        setcurrenFooter,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
