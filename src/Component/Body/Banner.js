import { useDataLayerValue } from '../../DataLayer'
import { BodyBanner, BodyInfoText, EmpityBanner } from '../../Styles/Component/Body/BannerStyle'
import MusicNoteIcon from '@material-ui/icons/MusicNote'

function Banner() {
  const [{ discover_weekly }] = useDataLayerValue()
  return (
    <BodyBanner>
      {discover_weekly ? (
        <img src={discover_weekly?.images[0].url} alt="Imagem" />
      ) : (
        <EmpityBanner>
          <MusicNoteIcon style={{ cursor: 'pointer', fontSize: '80px' }} />
        </EmpityBanner>
      )}

      <BodyInfoText>
        <strong>PLAYLIST</strong>
        <h2>{discover_weekly?.name}</h2>
        <p>{discover_weekly?.description} ...</p>
      </BodyInfoText>
    </BodyBanner>
  )
}

export default Banner
