import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <LoginPage />
        </Route>
        <Route exact path={'/Home'}>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
