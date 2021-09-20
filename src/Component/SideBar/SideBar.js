import React, { useEffect } from 'react'
import { Logo } from '../../ Constants/LogoSpotify'
import { SideBarContainer } from '../../Styles/Component/SideBars/SideBarStyled'
import SideBarOpitions from '../../Component/SideBar/SideBarOpitions'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined'
import { useDataLayerValue } from '../../DataLayer'
import { AuthContext } from '../../AuthContext'

function SideBar({ token }) {
  const [{ playlists }, dispatch] = useDataLayerValue()
  const { spotify, setCurrentPlaylist } = React.useContext(AuthContext)

  useEffect(() => {
    if (token) {
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists)
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
      <img src={Logo} alt="spotify Logo " />
      <SideBarOpitions title="Inicio" Icon={HomeOutlinedIcon} />
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
