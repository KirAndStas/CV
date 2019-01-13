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
            <img src={assetsUrl + imgTitles[currentMode] + '.gif'} />
        </div>
    );
}

Body.propTypes = {
    currentMode: PropTypes.string.isRequired,
};
