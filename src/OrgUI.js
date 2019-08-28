/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import AutoFitImage from 'react-image-autofit-frame';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const MaybeImage = (props) => {
    console.log(props.imageUrl)
    if (props.imageUrl && props.imageUrl != "") {
        return (<AutoFitImage frameWidth="20%" frameHeight="20%" imgSrc={props.imageUrl} style={styles.profileImg} />)
    }
    return null;
}

class EventUI extends React.Component {

    render() {
        const imageUrl = _.get(this.props, 'avatarUrl')
        const email = _.get(this.props, 'contact.email')
        const username = _.get(this.props, 'username')
        const name = _.get(this.props, 'name')
        const description = _.get(this.props, 'description.full')

        return (
            <div style={styles.eventCard}>
                <MaybeImage imageUrl={imageUrl} style={styles.profileImg} />

                <div style={styles.titleOrgGroup}>
                    <h2 style={styles.title}>{name}</h2>
                    <h5>{username}</h5>
                </div>
                <p>{description}</p>
                <br />
                <p> <FontAwesomeIcon icon={faEnvelope} /> {email}</p>


                <p style={{ fontStyle: 'italic', paddingTop: 15 }}>Download our <a style={{ color: '#46A2CF' }} href="https://parade.events/">mobile app</a> to create your personalized Parade profile, view events from this org, and explore hundreds more orgs and events!</p>

            </div>
        )
    }
}

const styles = {
    titleOrgGroup: {
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
    profileImg: {
        borderRadius: '50%'
    },
    eventCard: {
        padding: 10,
        height: '100%',
        width: '100%',
        flex: 1,
    }
};

export default EventUI
