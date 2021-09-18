import React from 'react'
import { useDataLayerValue } from '../../DataLayer'
import { BodyInfoText } from '../../Styles/Component/Body/BodyStyled'

function Banner() {
  const [{ discover_weekly }] = useDataLayerValue()
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', marginLeft: '30px', width: '80%' }}>
      <div>
        <img src={discover_weekly?.images[0].url} alt="Imagem" />
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
