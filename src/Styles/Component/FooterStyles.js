import styled from 'styled-components'
import breakPoints from '../../Constants/breakPoints'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #282828;
  position: fixed;
  bottom: 0;

  height: 65px;
  padding: 20px;
  h4 {
    margin-bottom: 0;
    font-size: 18px;
  }
  p {
    margin-top: 2px;
    font-size: 14px;
  }
  img {
    height: 60px;
    margin-left: 50px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
  }
  ${`@media only screen and ${breakPoints.device.cel}{
    justify-content: flex-start;
   
    img{
      margin-left: -10px;
      border-radius: 15px;
      width: 60px;
      height: 100px;
    }
  }`}
`

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  width: 30vw;
  height: 65px;
  padding: 5px;

  h4 {
    font-size: 18px;
  }
  p {
    font-size: 16px;
    margin-top: 5px;
  }
  ${`@media only screen and ${breakPoints.device.cel}{
    width: 90%;

  }
  }`}
`
export const FooterCenter = styled.div`
  display: flex;
  margin-right: 70px;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  height: 65px;
  padding: 0 100px;
  color: white;
  width: 300px;

  ${`@media only screen and ${breakPoints.device.cel}{
  margin-right: 0px;
   width: 3%;
   padding: 0px;
   margin-right: -5px;
  }
  }`}
`
export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 65px;
  width: 24%;
  margin-right: 80px;
  ${`@media only screen and ${breakPoints.device.cel}{
  
   width: 0%;
 
  }
  }`}
`
