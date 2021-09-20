import React from 'react'
import { useDataLayerValue } from '../../DataLayer'
import { BodyInfoText, EmpityBanner } from '../../Styles/Component/Body/BodyStyled'
import MusicNoteIcon from '@material-ui/icons/MusicNote'

function Banner() {
  const [{ discover_weekly }] = useDataLayerValue()
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', marginLeft: '30px', width: '80%' }}>
      <div>
        {discover_weekly ? (
          <img src={discover_weekly?.images[0].url} alt="Imagem" />
        ) : (
          <EmpityBanner>
            <MusicNoteIcon style={{ cursor: 'pointer', fontSize: '80px' }} />
          </EmpityBanner>
        )}
      </div>
      <BodyInfoText>
        <strong>PLAYLIST</strong>
        <h2>{discover_weekly?.name}</h2>
        <p>{discover_weekly?.description} ...</p>
      </BodyInfoText>
    </div>
  )
}

export default Banner
