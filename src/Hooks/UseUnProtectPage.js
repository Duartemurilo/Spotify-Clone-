import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLoginPage } from '../Router/Ways'

export const UseUnProtectPage = (token) => {
  const history = useHistory()

  useEffect(() => {
    if (token === null) {
      goToLoginPage(history)
    }
  }, [history, token])
}
