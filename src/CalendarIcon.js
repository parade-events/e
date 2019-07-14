import React from 'react';
import moment from 'moment';


class CalendarIcon extends React.Component {
    render() {

        const { date, onPress } = this.props;

        return (
            <div style={styles.containerStyle}>
                <div style={styles.dayOfTheWeekStyle}>
                    {
                        moment(date)
                            .format('MMM')
                            .toUpperCase()
                    }
                </div >
                <div style={styles.dayStyle}>
                    {moment(date).format('DD')}
                </div >
            </div >
        );
    }
};

const styles = {
    dayOfTheWeekStyle: {
        paddingTop: 3,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#47a2cf',
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: '0px'
    },
    containerStyle: {
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 0.8,
        borderColor: '#000',
        height: 100,
        width: 100,
    },
    dayStyle: {
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000',
        fontSize: 50,
        textAlign: 'center'


    },
};

export default CalendarIcon;
