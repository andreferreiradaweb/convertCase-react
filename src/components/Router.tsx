import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyle'
import App from './App'

type PropType = {}



export default (props: PropType) => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route component={App} exact path="/" />
      <Route component={() => <>Not Found</>} />
    </Switch>
  </BrowserRouter>
)
