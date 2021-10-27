import styled from 'styled-components'
import breakPoints from '../../../Constants/breakPoints'

export const BodyBanner = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 30px;
  width: 80%;
  ${`@media only screen and ${breakPoints.device.cel}{
     img{
     height:150px;
    }
     width: 90%;
     height:80vh;
  }`}
`

export const BodyInfoText = styled.div`
  padding: 5px;
  h2 {
    font-size: 48px;
    margin-top: 5px;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 0;
  }
  ${`@media only screen and ${breakPoints.device.cel}{
    h2 {
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 0;
  }

}`}
`
export const EmpityBanner = styled.div`
  margin: 0%, 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vw;
  width: 15vw;
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  margin-right: 1vw;
  ${`@media only screen and ${breakPoints.device.cel}{
  width: 25vw;
  height: 25vw;
}`}
`
