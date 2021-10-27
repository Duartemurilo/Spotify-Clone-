import React, { useState } from 'react'
import { AuthContext } from '../../AuthContext'
import { ContainerInfoTrack, SongRowContainer, SongRowTrack } from '../../Styles/Component/Body/SongRow.Styles'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function SongRow({ track }) {
  const { setCurrentTrack, setcurrenFooter } = React.useContext(AuthContext)
  const [currentHeart, setCurrentHeart] = useState(false)
  let minutes = parseInt((track?.duration_ms / (1000 * 60)) % 60)
  let seconds = parseInt((track?.duration_ms / 1000) % 60)

  const isActive = useMediaQuery('(max-width: 450px)')

  const handleChoseenTrack = () => {
    setCurrentTrack(track)
    setcurrenFooter(true)
  }

  return (
    <SongRowContainer onClick={() => handleChoseenTrack()}>
      <SongRowTrack>
        <div>
          <img src={track?.album.images[0].url} alt="" />

          <div>
            <h1>{track.name}</h1>
            <p>{track?.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        </div>
        <ContainerInfoTrack>
          {currentHeart === true ? (
            <div id="FavoriteIcon">
              <FavoriteIcon id="filled" onClick={() => setCurrentHeart(false)} />
            </div>
          ) : (
            <div id="FavoriteIcon">
              <FavoriteBorderIcon onClick={() => setCurrentHeart(true)} />
            </div>
          )}
          {isActive ? <></> : <p>{seconds < 10 ? minutes + ': 0' + seconds : minutes + ':' + seconds}</p>}
        </ContainerInfoTrack>
      </SongRowTrack>
    </SongRowContainer>
  )
}

export default SongRow
