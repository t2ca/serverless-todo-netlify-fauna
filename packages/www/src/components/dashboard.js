import React, { useContext } from 'react'
import { Container, Flex, Heading, NavLink, Button } from 'theme-ui'
import { IdentityContext } from '../../identity-context'
import { Link } from 'gatsby'

const Dashboard = () => {
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
        <NavLink as={Link} to="/app" p={2}>
          Dashboard
        </NavLink>
        {user && (
          <NavLink
            href="#!"
            p={2}
            onClick={() => {
              netlifyIdentity.logout()
            }}
          >
            Log out {capitalizeFirstLetter(user.user_metadata.full_name)}
          </NavLink>
        )}
      </Flex>
      <Flex sx={{ flexDirection: 'column', p: 3 }}>
        <div>
          This is top secret data! {user && user.user_metadata.full_name}
        </div>
      </Flex>
    </Container>
  )
}

export default Dashboard
