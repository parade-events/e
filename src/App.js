import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import EventContainer from './EventContainer'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import Home from './Home'
import Header from './Header'

const client = new ApolloClient({
  uri: 'https://aws-lambda.parade.events/graphql',
})

const App = () => (
  <Router >
    <Header />
    <ApolloProvider client={client}>
      <div style={styles.wrapper} id="wrapper" >

        {/*  If we're at WEBROOT */}
        <Route exact path="/e/" component={Home} />

        {/* If we see WEBROOT/e/####### */}
        <Route path="/e/:eventID" component={EventContainer} />

      </div>
    </ApolloProvider >
  </Router >

)
const styles = {
  leftPanel: {
    width: '40%',
    // height: '100%',
    backgroundColor: '#c3c9cc'
  },
  wrapper: {
    height: '100%',
  }
}



export default App
