import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import PublicLayout from 'layouts/PublicLayout'

import MainPage from 'pages/MainPage'
import TestPage from 'pages/TestPage'

const ProtectedRoute = ({
  component: Component, path, layout: Layout,
  setUserDetails, currentFolder,
  computedMatch, authOptions, ...rest
}) => {
  // setup protected route here
}

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
      <PublicRoute exact path={'/test'} component={TestPage} layout={PublicLayout} />

      {/* <PublicRoute component={Error404Page} {...unauthRouteProps} /> */}
    </Switch>
  )
}

export default withRouter(Routes)
