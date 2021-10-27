import React, { useEffect } from 'react'
import { Logo } from '../../Constants/LogoSpotify'
import { ContainerArrowBack, SideBarContainer } from '../../Styles/Component/SideBars/SideBarStyled'
import SideBarOpitions from '../../Component/SideBar/SideBarOpitions'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined'
import { useDataLayerValue } from '../../DataLayer'
import { AuthContext } from '../../AuthContext'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function SideBar({ token, currentSideBar, setCurrentSideBar }) {
  const [{ playlists }, dispatch] = useDataLayerValue()
  const { spotify, setCurrentPlaylist } = React.useContext(AuthContext)
  const isActive = useMediaQuery('(max-width: 450px)')

  useEffect(() => {
    if (token) {
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists,
        })
      })
    }
  }, [dispatch, spotify, token])

  const handleCurrentId = (id) => {
    setCurrentPlaylist(id)
  }

  return (
    <SideBarContainer>
      {isActive ? (
        <ContainerArrowBack>
          <ArrowBackIcon
            style={{ fontSize: 35, marginLeft: '10px' }}
            onClick={() => setCurrentSideBar(!currentSideBar)}
          />{' '}
          <img src={Logo} alt="spotify Logo " />
        </ContainerArrowBack>
      ) : (
        <img src={Logo} alt="spotify Logo " />
      )}

      <SideBarOpitions title="Home" Icon={HomeOutlinedIcon} />
      <SideBarOpitions title="Busca" Icon={SearchOutlinedIcon} />
      <SideBarOpitions title="Sua Biblioteca" Icon={LibraryMusicOutlinedIcon} />

      <br />
      <strong>
        <h4>Playlist</h4>
      </strong>
      <hr />

      {playlists?.items?.map((playlist) => {
        return (
          <SideBarOpitions
            key={playlists.id}
            handleId={handleCurrentId}
            playlistId={playlist.id}
            title={playlist.name}
          />
        )
      })}
    </SideBarContainer>
  )
}

export default SideBar
