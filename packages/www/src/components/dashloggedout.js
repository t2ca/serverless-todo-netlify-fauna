/** @jsx jsx */
import React, { useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import { jsx, Container, Flex, NavLink, Heading, Button } from 'theme-ui'
import { gql, useQuery } from '@apollo/client'
import { IdentityContext } from '../../identity-context'

const GET_LIST = gql`
  query GetList {
    getList {
      id
      firstname
      lastname
      email
    }
  }
`

const DashLoggedOut = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)
  const { loading, error, data, refetch } = useQuery(GET_LIST)
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

        <Flex sx={{ flexDirection: 'column' }}>
          {loading ? <div>loading...</div> : null}
          {error ? <div>{error.message}</div> : null}
          {!loading && !error && (
            <ul sx={{ listStyleType: 'none' }}>
              {data.getList.map((item) => (
                <Flex key={item.id}>
                  <span sx={{ color: `blue.7`, m: 2 }}>{item.firstname}</span>
                  <span sx={{ color: `blue.4`, m: 2 }}>{item.lastname}</span>
                  <span sx={{ fontWeight: 600, m: 2 }}>{item.email}</span>
                </Flex>
              ))}
            </ul>
          )}
        </Flex>
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
