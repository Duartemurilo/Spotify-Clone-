import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight, InputSearch } from '../../Styles/Component/Body/HeaderStyles'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../../DataLayer'

function Header() {
  const [{ user }] = useDataLayerValue()

  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchIcon />
        <InputSearch placeholder="Procure por artistas, musicas ou podcasts " type="text" />
      </HeaderLeft>
      <HeaderRight>
        <Avatar style={{ objectFit: 'cover', height: '50px', width: '50px' }} src={user?.images[0]?.url} />
        <p> {user?.display_name} </p>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
