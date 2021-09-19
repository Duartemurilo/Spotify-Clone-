import React from 'react'
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined'
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined'
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { FooterCenter, FooterContainer, FooterLeft, FooterRight } from '../Styles/Component/FooterStyles'
import { AuthContext } from '../AuthContext'

function Footer() {
  const { currentTrack } = React.useContext(AuthContext)

  return (
    <FooterContainer>
      <FooterLeft>
        <img src={currentTrack?.album.images[0].url} alt="" />
        <div>
          <h4>{currentTrack?.name}</h4>
          <p>{currentTrack?.album.artists[0].name}</p>
        </div>
      </FooterLeft>

      <FooterCenter>
        <ShuffleIcon style={{ color: '#1ed15e', cursor: 'pointer', fontSize: '30px' }} />
        <SkipPreviousOutlinedIcon style={{ cursor: 'pointer', fontSize: '30px' }} />
        <PlayCircleOutlineOutlinedIcon style={{ cursor: 'pointer', fontSize: '40px' }} />
        <SkipNextOutlinedIcon style={{ cursor: 'pointer', fontSize: '30px' }} />
        <RepeatIcon style={{ color: '#1ed15e', fontSize: '30px' }} />
      </FooterCenter>

      <FooterRight>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider style={{ color: '#1ed15e' }} />
          </Grid>
          <p>tempo</p>
        </Grid>
      </FooterRight>
    </FooterContainer>
  )
}

export default Footer
