import React, { useContext } from 'react'
import { Container, Heading, Button, Flex, NavLink } from 'theme-ui'
import { Link } from 'gatsby'
import { IdentityContext } from '../../identity-context'

const Index = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

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
            {capitalizeFirstLetter(user.user_metadata.full_name)}
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
          Login
        </Button>
      </Flex>
    </Container>
  )
}

export default Index
