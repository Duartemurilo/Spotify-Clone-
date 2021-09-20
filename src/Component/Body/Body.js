import React, { useEffect } from 'react'
import { BodyContainer, BodyIcons, BodySongs, EmpityBody } from '../../Styles/Component/Body/BodyStyled'
import { useDataLayerValue } from '../../DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'
import { AuthContext } from '../../AuthContext'
import Banner from './Banner'

function Body({ token }) {
  const { spotify, currentPlaylist } = React.useContext(AuthContext)

  const [{ discover_weekly }, dispatch] = useDataLayerValue()

  useEffect(() => {
    if (token) {
      spotify.getPlaylist(currentPlaylist).then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKKLY',
          discover_weekly: response,
        })
      })
    }
  }, [dispatch, currentPlaylist, token, spotify])

  return (
    <BodyContainer>
      <Header spotify={spotify} token={token} />

      <Banner />

      <BodySongs>
        <BodyIcons>
          <PlayCircleFilledIcon
            style={{ cursor: 'pointer', marginRight: '20px', fontSize: '60px', color: '#1ed15e', marginBottom: '5px' }}
          />
          <FavoriteIcon style={{ cursor: 'pointer', marginRight: '20px' }} fontSize="large" />
          <MoreHorizIcon style={{ cursor: 'pointer', marginRight: '20px' }} />
        </BodyIcons>

        {discover_weekly ? (
          discover_weekly?.tracks.items.map((playlist) => {
            return <SongRow key={playlist.id} track={playlist.track} />
          })
        ) : (
          <EmpityBody>
            <p>...</p>
            <hr />
            <h1>Essa Playlist não possui musica</h1>
          </EmpityBody>
        )}
      </BodySongs>
    </BodyContainer>
  )
}

export default Body
