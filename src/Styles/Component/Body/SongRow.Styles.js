import styled from 'styled-components'
import breakPoints from '../../../Constants/breakPoints'

export const SongRowContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 77vw;
  height: 60px;
  margin-top: 2vh;
  margin-left: 10px;

  border-radius: 7px;
  padding: 5px;
  :hover {
    cursor: pointer;
    background-color: rgb(143, 132, 130, 0.4);
  }
  :hover {
    #FavoriteIcon {
      opacity: 1;
      #filled {
        color: red;
      }
    }
  }
  h1 {
    font-size: 16px;
    margin-top: 0;
  }
  p {
    font-size: 14px;
    margin-top: 3px;
    color: white;
  }
  img {
    height: 60px;
    width: 60px;
    margin-top: 0;
    margin-bottom: 5px;
    margin-left: 30px;
  }
  ${`@media only screen and ${breakPoints.device.cel}{
    img{
      margin-left: 5px;
      margin-right:1vw;
    }

    width: 89%;
    margin-top:1vh;
    height: 80px;
  }`}
`
export const SongRowTrack = styled.div`
  margin-top: 1vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  div {
    display: flex;
    justify-content: center;

    h1 {
      margin-bottom: 0;
    }
    div {
      flex-direction: column;
    }
  }
  ${`@media only screen and ${breakPoints.device.cel}{

    div {
      
    display: flex;
    justify-content: center;

    
    h1 {
      margin-bottom: 0;
    }
    div {
      flex-direction: column;
      width: 72vw;
      padding-left:10px;
    p{
      font-size:16px;
      
    }
    }
  }`}
`
export const ContainerInfoTrack = styled.div`
  gap: 2vw;
  width: 30%;
  margin-right: 1vw;

  display: flex;
  align-items: flex-end;
  p {
    margin-bottom: 5px;
  }
  #FavoriteIcon {
    opacity: 0;
  }
  ${`@media only screen and ${breakPoints.device.cel}{

  div {
    display: none;
  }`}
`
