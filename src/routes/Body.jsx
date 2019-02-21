import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { assetsUrl } from 'config/config.json';

const dayTitles = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const imgTitles = {
    mood: 'fashion',
    day: '',
};

export default function Body({ currentMode }) {
    const currentDayNumber = moment().day();
    imgTitles.day = dayTitles[currentDayNumber];

    return (
        <div className='body-wrapper'>
            {currentMode === '#песняНедели'
                ? <a style={{ fontFamily: 'Ubuntu', fontSize: '50px', color: 'darkkhaki' }} href='https://www.youtube.com/watch?v=Uqvqbi7iZeA' target='_blank' rel='noopener noreferrer'>21 Savage - All My Friends</a>
                : <img src={assetsUrl + imgTitles[currentMode] + '.gif'} />
            }
        </div>
    );
}

Body.propTypes = {
    currentMode: PropTypes.string.isRequired,
};
