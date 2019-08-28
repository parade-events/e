import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import OrgUI from './OrgUI'
import _ from 'lodash'

const ORG_QUERY = gql`
query orgQuery($id: ID) {
  orgNoAuth(id: $id) {
    name
    description {
        full
      }
    username
    avatarUrl
    contact {
      email
    }
  }
}`


class OrgContainer extends React.Component {

  render() {

    const id = _.get(this.props, 'match.params.orgID')

    if (!id) {
      return <div>No org selected.</div>
    }

    return (
      // Start of query
      <Query
        query={ORG_QUERY}
        variables={{ id }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading, please wait....</p>
          if (error) {
            return <p style={{ padding: 10 }}>No org with that id - Check out all our clubs on iOS and Android! </p>
          }
          // All good.
          console.log(data)

          return (
            <OrgUI {...data.orgNoAuth} />

          );
        }}
      </Query>)
  }
}

export default OrgContainer

