import styled from 'styled-components'

export const SongRowContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;

  :hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }
  h1 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    margin-top: 3px;
    color: grey;
  }
  img {
    height: 60px;
    width: 60px;
  }
`
export const SongRowTrack = styled.div`
  margin-top: 1vh;
  display: flex;
  align-items: center;
`
