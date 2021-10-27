import React, { useEffect } from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight, InputSearch } from '../../Styles/Component/Body/HeaderStyles'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../../DataLayer'
import { AuthContext } from '../../AuthContext'
import MenuIcon from '@material-ui/icons/Menu'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function Header({ token, setCurrentSideBar, currentSideBar }) {
  const [{ user }, dispatch] = useDataLayerValue()
  const { spotify } = React.useContext(AuthContext)
  const isActive = useMediaQuery('(max-width: 450px)')

  useEffect(() => {
    if (token) {
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }
  }, [dispatch, spotify, token])

  return (
    <HeaderContainer>
      {isActive && <MenuIcon style={{ marginLeft: '-10px' }} onClick={() => setCurrentSideBar(!currentSideBar)} />}
      <HeaderLeft>
        <SearchIcon />
        {isActive ? (
          <InputSearch placeholder="Procure" type="text" />
        ) : (
          <InputSearch placeholder="Procure por artistas, musicas ou podcasts " type="text" />
        )}
      </HeaderLeft>
      <HeaderRight>
        {currentSideBar ? (
          <></>
        ) : (
          <Avatar style={{ objectFit: 'cover', height: '50px', width: '50px' }} src={user?.images[0]?.url} />
        )}

        <p> {user?.display_name} </p>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
