import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import PublicLayout from 'layouts/PublicLayout'
import PrivateLayout from 'layouts/PrivateLayout'

import MainPage from 'pages/MainPage'
import PrivatePage from 'pages/PrivatePage'
import ForbiddenPage from 'pages/ForbiddenPage'

const PublicRoute = ({ component: Component, layout: Layout, path, ...rest }) => {
  const render = props => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }

  return (
    <Route path={path} render={render} {...rest} />
  )
}

const Routes = ({
}) => {
  return (
    <Switch>
      <PublicRoute exact path={'/'} component={MainPage} layout={PublicLayout} />
      <PublicRoute exact path={'/private'} component={PrivatePage} layout={PrivateLayout} />

      <PublicRoute exact path={'/403'} component={ForbiddenPage} layout={PublicLayout} />

      {/* <PublicRoute component={Error404Page} {...unauthRouteProps} /> */}
    </Switch>
  )
}

export default withRouter(Routes)
