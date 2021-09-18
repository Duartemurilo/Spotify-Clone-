import styled from 'styled-components'

export const Options = styled.div`
  color: grey;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 200ms color ease-in;
  div {
    padding-left: 10px;
    padding-right: 10px;
  }
  p {
    font-size: 14px;
    margin-left: 20px;
  }
  :hover {
    color: white;
  }
`
