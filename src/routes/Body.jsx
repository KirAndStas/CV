import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

const dayTitles = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sanday'];
const imgTitles = {
    mood: 'girl',
    day: '',
};

export default function Body({ currentMode }) {
    const currentDayNumber = moment().day();
    imgTitles.day = dayTitles[currentDayNumber - 1];

    return (
        <div className='body-wrapper'>
            <img src={assetsUrl + imgTitles[currentMode] + '.gif'} />
        </div>
    );
}

Body.propTypes = {
    currentMode: PropTypes.string.isRequired,
};
