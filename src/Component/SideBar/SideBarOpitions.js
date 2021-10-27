import React from 'react'
import { Options } from '../../Styles/Component/SideBars/SideBarOpitionsStyle'

function SideBarOpitions({ title, Icon, playlistId, handleId }) {
  return (
    <Options>
      {Icon && (
        <div>
          <Icon />
        </div>
      )}
      {Icon ? <h4 style={{ marginLeft: '0px' }}>{title} </h4> : <p onClick={() => handleId(playlistId)}>{title}</p>}
    </Options>
  )
}

export default SideBarOpitions
