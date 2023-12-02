import client from './client'
import {Home} from './page'

import { ApolloProvider } from '@apollo/client';
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  )
}
