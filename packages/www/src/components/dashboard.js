import React, { useContext, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Flex,
  Input,
  Label,
  NavLink,
  Button,
  Checkbox,
} from 'theme-ui'
import { gql, useMutation, useQuery } from '@apollo/client'
import { IdentityContext } from '../../identity-context'

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
    }
  }
`
const UPDATE_TODO_DONE = gql`
  mutation UpdateTodoDone($id: ID!) {
    updateTodoDone(id: $id) {
      text
      done
    }
  }
`

const GET_TODOS = gql`
  query GetTodos {
    getTodo {
      id
      text
      done
    }
  }
`

const GET_LIST = gql`
  query GetList {
    getList {
      id
      name
      email
    }
  }
`

// const todosReducer = (state, action) => {
//   switch (action.type) {
//     case 'addTodo':
//       return [{ done: false, value: action.payload }, ...state]
//     case 'toggleTodoDone': {
//       const newState = [...state]
//       newState[action.payload] = {
//         done: !state[action.payload].done,
//         value: state[action.payload].value,
//       }
//       return newState
//     }
//   }
// }

const Dashboard = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)
  // const [todos, dispatch] = useReducer(todosReducer, [])
  const inputRef = useRef()
  const [addTodo] = useMutation(ADD_TODO)
  const [updateTodoDone] = useMutation(UPDATE_TODO_DONE)
  const { loading, error, data, refetch } = useQuery(GET_LIST)

  console.log(data)
  console.log(user.id)

  useEffect(() => {
    // Update the document title using the browser API
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
          This is top secret data! {user && user.user_metadata.full_name}
        </div>
        {/*
        <Flex
          as="form"
          onSubmit={async (e) => {
            e.preventDefault()
            await addTodo({ variables: { text: inputRef.current.value } })
            inputRef.current.value = ''
            await refetch()
          }}
        >
          <Label htmlFor="todo" sx={{ display: 'flex' }}>
            <span>Add Todo</span>
            <Input name="todo" ref={inputRef} sx={{ ml: 1 }} />
          </Label>
          <Button
            sx={{
              ml: 1,
            }}
          >
            Submit
          </Button>
        </Flex>*/}
        <Flex sx={{ flexDirection: 'column' }}>
          {loading ? <div>loading...</div> : null}
          {error ? <div>{error.message}</div> : null}
          {!loading && !error && (
            <ul sx={{ listStyleType: 'none' }}>
              {data.getList.map((todo) => (
                <Flex
                  key={todo.id}
                  as="li"
                  onClick={async () => {
                    // await updateTodoDone({ variables: { id: todo.id } })
                    await refetch()
                  }}
                >
                  {/* <Checkbox
                    onChange={(props) => console.log(props)}
                    checked={false}
                  /> */}
                  <span>{todo.name}</span>
                  <span>{todo.email}</span>
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
