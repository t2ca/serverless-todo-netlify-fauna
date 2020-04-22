import React from 'react'
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from 'apollo-link-context'
import netlifyIdentity from 'netlify-identity-widget'
import wrapElement from './wrap-element'

const authLink = setContext((_, { headers }) => {
  const user = netlifyIdentity.currentUser()
  const token = user.token.access_token
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const httpLink = new HttpLink({
  uri:
    'https://learn-serverless-todo-netlify-fauna.netlify.app/.netlify/functions/graphql',
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>{wrapElement({ element })}</ApolloProvider>
  )
}
