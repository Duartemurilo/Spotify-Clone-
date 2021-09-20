import React, { useEffect } from 'react'
import { AuthContext } from '../AuthContext'
import { useDataLayerValue } from '../DataLayer'

function HandleSpotify() {
  const [dispatch] = useDataLayerValue()

  const { spotify } = React.useContext(AuthContext)

  useEffect(() => {
    spotify.getMe().then((user) => {
      dispatch({
        type: 'SET_USER',
        user: user,
      })
    })
  }, [])
}

export default HandleSpotify
