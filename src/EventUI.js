/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import moment from 'moment'
import _ from 'lodash'

class EventUI extends React.Component {

    render() {
        const imageUrl = _.get(this.props, 'imageUrl')
        const title = _.get(this.props, 'title')
        const startTime = _.get(this.props, 'startTime')
        const orgName = _.get(this.props, 'organization.name')
        const fullDescrip = _.get(this.props, 'description.full')

        return (
            <div style={styles.eventCard}>
                <img style={styles.profileImg} src={imageUrl} />
                <h1>{title}</h1>
                <h4>Start: {moment(startTime).format('MMMM Do h:mm a')}</h4>
                <h5>Hosted by: {orgName}</h5>

                <p>{fullDescrip}</p>

                <br></br><br></br>
                <p>..........Download Parade for the best experience!</p>
            </div>
        )
    }
}

const styles = {
    profileImg: {
        height: '60%',
        width: '60%',
        borderRadius: '.5em',
        display: 'flex',
        textAlign: 'center',

    },
    eventCard: {
        padding: 10,
        height: '100%',
    }
};

export default EventUI
