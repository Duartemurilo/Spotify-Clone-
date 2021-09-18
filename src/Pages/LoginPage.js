import React, { useEffect } from 'react'
import { Logo } from '../ Constants/LogoSpotify'
import { useDataLayerValue } from '../DataLayer'
import { UseProtectPage } from '../Hooks/UseProtectPage'
import { loginUrl, getToken } from '../Services/Link'
import { LoginContainer } from '../Styles/Pages/LoginPageStyles'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

function LoginPage() {
  const [{ token }, dispatch] = useDataLayerValue()

  UseProtectPage(token)

  useEffect(() => {
    const hash = getToken()
    window.location.hash = ''

    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token)
    }
  }, [dispatch, token])

  return (
    <LoginContainer>
      <img src={Logo} alt="Logo" />
      <a href={loginUrl}>Faca login pelo spotify</a>
    </LoginContainer>
  )
}

export default LoginPage
