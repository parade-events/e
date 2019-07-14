import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import EventContainer from './EventContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'

const client = new ApolloClient({
  uri: 'https://aws-lambda-staging.parade.events/graphql',
})


const App = () => (
  <Router>
    <Header />
    <ApolloProvider client={client}>
      <div style={styles.wrapper} id="wrapper" >
        <div style={styles.leftPanel} id="left">

          <div class="stickLeft">
            <div class="firstPanelHeading">

              <div class='logoAndName'>
                <img class='icon' alt="Parade elephant blue logo" src='https://parade.events/assets/web1.png' />

              </div>
            </div>
            <p class="firstPanelBody">
              Northeastern has <strong>hundreds</strong> of events each week.
                         <br></br>Discover them with Parade.
            </p>
            <div class="appDownloadButtons">
              <a href="https://itunes.apple.com/us/app/parade-events/id1380171412">
                <img
                  class="dlButton"
                  src='/assets/app-store-badge.svg' />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.parade">
                <img
                  class="dlButton"
                  src='/assets/play-store-badge.png' />
              </a>
            </div>
          </div>

          <p>Download for free today.</p>

        </div>

        <div id="right">

          {/*  If we're at WEBROOT */}
          <Route exact path="/e/" component={Home} />

          {/* If we see WEBROOT/e/####### */}
          <Route path="/e/:eventID" component={EventContainer} />


        </div>
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
