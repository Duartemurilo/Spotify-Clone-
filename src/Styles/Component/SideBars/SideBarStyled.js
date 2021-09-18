import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0%;
  height: 100vh;
  padding-left: 10px;
  padding-right: 10px;
  width: 17%;
  min-width: 230px;
  color: white;
  background-color: #040404;
  h4 {
    font-size: 14px;
    margin: 0;
    margin-left: 10px;
  }
  hr {
    width: 100%;
    border: 1px solid #282828;
  }
  img {
    height: 70px;
    padding: 10px;
    margin-right: auto;
    object-fit: cover;
    margin-bottom: 1vh;
  }
`
