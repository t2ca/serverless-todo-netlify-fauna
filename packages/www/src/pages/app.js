import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Heading, Button, Flex, NavLink } from 'theme-ui'
import { Router } from '@reach/router'

import { IdentityContext } from '../../identity-context'
import Dashboard from '../components/dashboard'
import DashLoggedOut from '../components/dashloggedout'

const App = () => {
  const { user } = useContext(IdentityContext)
  if (!user) {
    return (
      <Router>
        <DashLoggedOut path="/app/" />
      </Router>
    )
  }
  return (
    <Router>
      <Dashboard path="/app/" />
    </Router>
  )
}

export default App
