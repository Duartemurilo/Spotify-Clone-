import React, { useEffect } from 'react'
import { Logo } from '../ Constants/LogoSpotify'
import { useDataLayerValue } from '../DataLayer'
import { UseProtectPage } from '../Hooks/UseProtectPage'
import { loginUrl, getToken } from '../Services/Link'
import { LoginContainer } from '../Styles/Pages/LoginPageStyles'
import { AuthContext } from '../AuthContext'

function LoginPage() {
  const { spotify } = React.useContext(AuthContext)
  const [{ token }, dispatch] = useDataLayerValue()

  UseProtectPage(token)

  console.log(token)
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
  }, [dispatch, token, spotify])

  return (
    <LoginContainer>
      <img src={Logo} alt="Logo" />
      <a href={loginUrl}>Faça login pelo spotify</a>
    </LoginContainer>
  )
}

export default LoginPage
