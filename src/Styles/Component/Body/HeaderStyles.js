import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
  height: 60px;
  width: 90%;
  margin-top: 30px;
  margin-left: 30px;
`

export const HeaderLeft = styled.div`
  flex: 0.5;
  min-width: 80px;
  background-color: white;
  color: grey;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 10px;
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
  }
`

export const InputSearch = styled.input`
  box-shadow: 0 0 0 0;
  width: 100%;
  border: 0 none;
  outline: 0;
`
