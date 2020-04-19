import React, { useReducer, useContext, useRef } from 'react'
import {
  Container,
  Flex,
  Heading,
  Input,
  Label,
  NavLink,
  Button,
  Checkbox,
} from 'theme-ui'
import { IdentityContext } from '../../identity-context'
import { Link } from 'gatsby'

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'addTodo':
      return [{ done: false, value: action.payload }, ...state]
    case 'toggleTodoDone':
      const newState = [...state]
      newState[action.payload] = {
        done: !state[action.payload].done,
        value: state[action.payload].value,
      }
      return newState
  }
}

const Dashboard = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)
  const [todos, dispatch] = useReducer(todosReducer, [])
  const inputRef = useRef()

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
        <Flex
          as="form"
          onSubmit={(e) => {
            e.preventDefault()
            dispatch({ type: 'addTodo', payload: inputRef.current.value })
            inputRef.current.value = ''
          }}
        >
          <Label sx={{ display: 'flex' }}>
            <span>Add Todo</span>
            <Input ref={inputRef} sx={{ ml: 1 }} />
          </Label>
          <Button
            sx={{
              ml: 1,
            }}
          >
            Submit
          </Button>
        </Flex>
        <Flex sx={{ flexDirection: 'column' }}>
          <ul sx={{ listStyleType: 'none' }}>
            {todos.map((todo) => (
              <Flex as="li" key={todo.value}>
                <Checkbox checked={todo.done} />
                <span>{todo.value}</span>
              </Flex>
            ))}
          </ul>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Dashboard
