import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import EventUI from './EventUI';
import _ from 'lodash'

const EVENT_QUERY = gql`
query evtQuery($id: ID) {
  eventNoAuth(id: $id) {
    title
    organization {
        id
        name
        username
        avatarUrl
      }
      startTime
      endTime
      location
      description {
        full
      }
      tags {
        id
        text
      }
      imageUrl
  }
}`

class EventContainer extends React.Component {

  render() {

    const id = _.get(this.props, 'match.params.eventID')

    if (!id) {
      return <div>No event selected.</div>
    }

    return (
      // Start of query
      <Query
        query={EVENT_QUERY}
        variables={{ id }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading, please wait....</p>
          if (error) {
            return <p style={{ padding: 10 }}>No event with that id - Check out all our events on iOS and Android! </p>
          }
          // All good.
          return (
            <EventUI {...data.eventNoAuth} />

          );
        }}
      </Query>)
  }
}

export default EventContainer
