import styled from 'styled-components'
import breakPoints from '../../Constants/breakPoints'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width: 100%;
  color: white;
  height: 100vh;
  a {
    border-radius: 99px;
    padding: 22px;
    color: white;
    text-decoration: none;
    font-weight: 800px;
    cursor: pointer;
    background-color: #1db954;
  }
  div {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    p {
      font-size: 14px;
    }
    h4 {
      margin-right: 5px;
    }
  }

  ${`@media only screen and ${breakPoints.device.cel}{
   align-items: center;
   justify-content: center;
   width: 100%;
   .Login{
    margin-top:-30vh;
   }
   height: 100vh;
   gap:4vh;
   overflow: hidden;
   div{
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    p{
      font-size:14px;
    }
    h4{
      margin-right:5px;
    }
   }
  img{
 
    width: 80%;
  }
}`}
`
