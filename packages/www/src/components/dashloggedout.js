/** @jsx jsx */
import React, { useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import { jsx, Container, Flex, NavLink, Heading, Button } from 'theme-ui'
import { gql, useQuery } from '@apollo/client'
import { IdentityContext } from '../../identity-context'

const DashLoggedOut = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  return (
    <Container>
      <Flex as="nav">
        <NavLink as={Link} to="/" p={2}>
          Home
        </NavLink>
        <NavLink as={Link} to="/app/" p={2}>
          Dashboard
        </NavLink>
        {user && (
          <NavLink href="#!" p={2}>
            {user.user_metadata.full_name}
          </NavLink>
        )}
      </Flex>
      <Flex sx={{ flexDirection: 'column', p: 3 }}>
        <Heading>hello world</Heading>

        <Button
          sx={{ mt: 3 }}
          onClick={() => {
            netlifyIdentity.open()
          }}
        >
          Log in
        </Button>
      </Flex>
    </Container>
  )
}

export default DashLoggedOut
