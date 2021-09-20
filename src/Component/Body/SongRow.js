import React from 'react'
import { AuthContext } from '../../AuthContext'
import { SongRowContainer, SongRowTrack } from '../../Styles/Component/Body/SongRow.Styles'

function SongRow({ track }) {
  const { setCurrentTrack, setcurrenFooter } = React.useContext(AuthContext)

  const handleChoseenTrack = () => {
    setCurrentTrack(track)
    setcurrenFooter(true)
  }

  return (
    <SongRowContainer onClick={() => handleChoseenTrack()}>
      <SongRowTrack>
        <img src={track?.album.images[0].url} alt="" />

        <div>
          <h1>{track.name}</h1>
          <p>
            {track?.artists.map((artist) => artist.name).join(', ')}
            {track.album.name}
          </p>
        </div>
      </SongRowTrack>
    </SongRowContainer>
  )
}

export default SongRow
