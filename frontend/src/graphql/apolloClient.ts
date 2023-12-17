import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { API_URL } from '../utils'

const httpLink = new HttpLink({
  uri: API_URL,
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default apolloClient
