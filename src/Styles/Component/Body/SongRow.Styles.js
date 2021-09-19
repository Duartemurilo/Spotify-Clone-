import styled from 'styled-components'

export const SongRowContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 81vw;
  height: 60px;
  margin-top: 2vh;
  padding: 5px;
  :hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }
  h1 {
    font-size: 16px;
    margin-top: 0;
  }
  p {
    font-size: 14px;
    margin-top: 3px;
    color: grey;
  }
  img {
    height: 60px;
    width: 60px;
    margin-top: 0;
    margin-bottom: 5px;
    margin-left: 30px;
  }
`
export const SongRowTrack = styled.div`
  margin-top: 1vh;
  display: flex;
  align-items: center;
`
