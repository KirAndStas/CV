import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'src/routes/Header';
import Body from 'src/routes/Body';

import 'src/index.less';

const modes = ['mood', 'day', '#песняНедели'];

export default class App extends React.Component {
    state = {
        mode: 'mood', // mood || day || #песняНедели
    }

    changeMode = (currentMode) => {
        const currentModeIndex = modes.indexOf(currentMode);
        const lastModeIndex = modes.length - 1;
        const nextModeIndex = (currentModeIndex + 1) > lastModeIndex ? 0 : currentModeIndex + 1;

        this.setState({ mode: modes[nextModeIndex] });
    }

    render() {
        const { mode } = this.state;

        return (
            <div>
                <Header mode={mode} onModeChange={this.changeMode} />
                <Body currentMode={mode} />
            </div>
        );
    }
}
