/** @jsx jsx */
import React, { useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import { jsx, Container, Flex, NavLink } from 'theme-ui'
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

const Dashboard = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)
  const { loading, error, data, refetch } = useQuery(GET_LIST)

  console.log(data)
  console.log(user.id)

  useEffect(() => {
    // Run only once
    refetch()
  }, [])

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
          This is top secret data!{' '}
          {user && capitalizeFirstLetter(user.user_metadata.full_name)}
        </div>

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
      </Flex>
    </Container>
  )
}

export default Dashboard
