/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import AutoFitImage from 'react-image-autofit-frame';
import CalendarIcon from './CalendarIcon'

class EventUI extends React.Component {

    render() {
        const imageUrl = _.get(this.props, 'imageUrl')
        const title = _.get(this.props, 'title')
        const startTime = _.get(this.props, 'startTime')
        const orgName = _.get(this.props, 'organization.name')
        const location = _.get(this.props, 'location')
        const fullDescrip = _.get(this.props, 'description.full')
        const tags = _.get(this.props, 'tags')

        return (
            <div style={styles.eventCard}>
                <AutoFitImage frameWidth="80%" frameHeight="40%" imgSrc={imageUrl} style={styles.profileImg} />

                <div style={styles.titleLine}>
                    <CalendarIcon date={startTime} />
                    <div style={styles.titleOrgGroup}>
                        <h3 style={styles.title}>{title}</h3>
                        <h5>{orgName}</h5>
                    </div>
                </div>

                <h5>Start: {moment(startTime).format('MMMM Do h:mm a')}</h5>
                <h5>{location}</ h5>
                <p>{fullDescrip}</p>

                <p style={{ fontStyle: 'italic', paddingTop: 15 }}>Download our mobile app to create your personalized Parade profile, RSVP to this event, and explore hundreds more orgs and events!</p>

            </div >
        )
    }
}

const styles = {
    titleOrgGroup: {
        paddingLeft: '10px',
        lineHeight: '0%',
    },
    titleLine: {
        paddingTop: '10px',
        display: 'flex',
        margin: '10px'

    },
    title: {
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    profileImg: {},
    eventCard: {
        padding: 10,
        height: '100%',
        width: '100%',
        flex: 1,
    }
};

export default EventUI
