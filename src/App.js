import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import EventContainer from './EventContainer'
import OrgContainer from './OrgContainer'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import Home from './Home'
import Header from './Header'

// Production
let gqlUri = 'https://aws-lambda.parade.events/graphql'

const determineEnv = () => {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    gqlUri = 'http://localhost:8080/graphql'
  }
}

// Swap env if in dev. 
determineEnv();

const client = new ApolloClient({
  uri: gqlUri
})

const debug = () => {
  console.log(gqlUri);
}
debug();

const App = () => (
  <Router >
    <Header />
    <ApolloProvider client={client}>
      <div style={styles.wrapper} id="wrapper" >

        {/*  If we're at WEBROOT */}
        <Route exact path="/e/" component={Home} />
        <Route exact path="/o/" component={Home} />

        {/* If we see WEBROOT/e/####### */}
        <Route path="/e/:eventID" component={EventContainer} />

        {/* If we see WEBROOT/o/####### */}
        <Route path="/o/:orgID" component={OrgContainer} />

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
