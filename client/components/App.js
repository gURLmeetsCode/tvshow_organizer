import React, {Component} from 'react'
import Shows from './Shows'


import ApolloClient from "apollo-boost"
import {ApolloProvider} from "react-apollo"

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

export default class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <div className="container">
            <div className="main-logo">
              <h2 className="main-logo-title"><img className="main-icon" src="/assets/tvicon.png" alt="tv"/> ShowLIST</h2>
            </div>
          <Shows />
        </div>
      </ApolloProvider>
    )
  }
}
