import styled from 'styled-components'

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: overlay;
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  width: 100%;
  height: 100vh;
  color: white;

  img {
    margin: 0%, 10px;
    height: 15vw;
    object-fit: contain;
    margin-right: 1vw;
  }
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
`
export const BodySongs = styled.div`
  margin: 20px -30px;
  margin-left: 1px;
  width: 90%;
`

export const BodyIcons = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-left: 30px;
`
export const EmpityBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 79vw;
  height: 60vh;
  margin-right: 20px;
  p {
    font-size: 40px;
  }
  hr {
    background-color: white;
    width: 100%;
  }
  h1 {
    font-size: 25px;
  }
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
`
