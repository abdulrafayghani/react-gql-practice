import React from 'react';
import { ApolloProvider } from '@apollo/client'
import gqlClient from './config/gqlConfig'
import { Students } from './Components/Students';


function App() {
  return (
    <ApolloProvider client={gqlClient} >
      <Students />
    </ApolloProvider>
  );
}

export default App;
