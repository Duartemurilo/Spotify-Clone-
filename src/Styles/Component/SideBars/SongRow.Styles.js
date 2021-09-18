import styled from 'styled-components'

export const SongRowContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 20px;
  padding: 20px;
  :hover{
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }
  h1{
    font-size: 16px;
  }
  p{
    font-size: 14px;
    margin-top: 3px;
    color: grey;
  }
`
export const ImageSong = styled.img`
  height: 40px;
  width: 40px ;
`

export const SongRowInfo = styled.div`
  margin-left: 20px;
`