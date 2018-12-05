import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './Tip.less';

export default function Tip(props) {
    return (
        <div className='tip-wrapper'>
            <span className='tip'>Click here to switch modes</span>
        </div>
    );
}
