import React, { useEffect } from 'react'
import { Logo } from '../Constants/LogoSpotify'
import { useDataLayerValue } from '../DataLayer'
import { UseProtectPage } from '../Hooks/UseProtectPage'
import { loginUrl, getToken } from '../Services/Link'
import { LoginContainer } from '../Styles/Pages/LoginPageStyles'
import { AuthContext } from '../AuthContext'

function LoginPage() {
  const { spotify } = React.useContext(AuthContext)
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
  }, [dispatch, token, spotify])

  return (
    <LoginContainer>
      <div className="Login">
        <h4>Email:</h4> <p>projetosmuzidev@gmail.com</p>
      </div>
      <div className="Login2">
        <h4>Senha:</h4> <p>muzidev123</p>
      </div>
      <img src={Logo} alt="Logo" />
      <div>
        <a href={loginUrl}>Faça login pelo spotify</a>
      </div>
    </LoginContainer>
  )
}

export default LoginPage
