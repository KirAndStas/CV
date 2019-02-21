import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { assetsUrl, secret } from 'config/config.json';
// import Tip from 'src/components/Tip';

export default class Header extends React.Component {
    static propTypes = {
        mode: PropTypes.string.isRequired,
        onModeChange: PropTypes.func.isRequired,
    };

    linksData = [
        { title: 'cv_link', onClickHandler: () => this.onCVLinkClick() },
        { title: 'inst', onClickHandler: () => window.open('https://www.instagram.com/vesground/', '_blank') },
        { title: 'github', onClickHandler: () => window.open('https://github.com/vesground', '_blank') },
        { title: 'mail', onClickHandler: () => this.copyEmailToClipboard() },
    ]

    // state = {
    //     isTipShown: false,
    // }

    // componentDidMount() {
    //     const modeTitleEl = document.getElementById('modeTitle');
    //
    //     modeTitleEl.addEventListener('mouseover', () => this.handleOnModeTitleMouseOver('show'), false);
    //     modeTitleEl.addEventListener('mouseout', () => this.handleOnModeTitleMouseOver('hide'), false);
    // }
    //
    // componentWillUnmount() {
    //     const modeTitleEl = document.getElementById('modeTitle');
    //
    //     modeTitleEl.removeEventListener('mouseover', () => this.handleOnModeTitleMouseOver(), false);
    //     modeTitleEl.removeEventListener('mouseout', () => this.handleOnModeTitleMouseOver(), false);
    // }

    onCVLinkClick = () => {
        // const typedKeyword = window.prompt('type your keyword here');
        //
        // if (typedKeyword && typedKeyword === secret) {
        const win = window.open(`${assetsUrl}public_cv.pdf`, '_blank'); // eslint-disable-line
        win.focus();
        // } else if (typeof typedKeyword === 'string' && typedKeyword !== 'keyword') {
        //     const error = window.confirm('Your keyword is wrong. Click OK, to try again.');
        //     if (error) this.onCVLinkClick();
        // }
    }

    // handleOnModeTitleMouseOver(action) {
    //     if (!action) return;
    //
    //     const { isTipShown } = this.state;
    //     const needChangeState = (isTipShown === false && action === 'show')
    //         || (isTipShown === true && action === 'hide');
    //     const newTipDisplayState = action === 'show';
    //
    //     if (needChangeState) this.setState({ isTipShown: newTipDisplayState });
    // }

    copyEmailToClipboard() {
        const self = this;
        const el = document.createElement('textarea');
        el.value = 'vesground@gmail.com';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Email was copied!!!');
    }

    render() {
        const { onModeChange, mode } = this.props;

        return (
            <div className='header-wrapper'>
                <div>
                    <span>mode:</span>
                    <button id='modeTitle' className='link-btn' onClick={() => onModeChange(mode)}>{ mode }</button>
                </div>
                <div className='links'>
                    {
                        this.linksData.map((link) => {
                            const { onClickHandler, title } = link;

                            return (
                                <button className='link-btn info' onClick={onClickHandler}>{title}</button>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
