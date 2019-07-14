/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import _ from 'lodash'
import AutoFitImage from 'react-image-autofit-frame';
import StickyHeader from 'react-sticky-header';
import 'react-sticky-header/styles.css';

class Header extends React.Component {

    render() {

        return (
            <div style={styles.container}>
                <a href="https://parade.events/">
                    <img style={styles.img} src={'https://parade.events/assets/parade_font_white.png'} />
                </a>
                <div style={styles.menuItems}>
                    Get App
                <div style={styles.emoji}>
                        📲</div>
                </div>

            </div >
        )
    }
}

const styles = {
    container: {
        width: '100%',
        backgroundColor: '#47a2cf',
        alignItems: 'horizontal'

    },
    img: {
        width: '153px',
        height: '47px',
        margin: '20px',

    },
    menuItems: {
        float: 'right',
        margin: '20px',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: '20px',
        color: '#fff',
        paddingTop: '6px'
    },
    emoji: {
        paddingTop: '4px',
        float: 'right'
    }
};

export default Header
