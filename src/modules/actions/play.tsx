import React from 'react';
import { APP_STATUS } from '../shared/enums';

interface IPlayAction {
    status: string,
    setStatus(status: string): void
}

const PlayAction: React.FunctionComponent<IPlayAction> = ({ status, setStatus }) => {
    const [btnColor, setBtnColor] = React.useState('green');
    const play = () => {
        const isPlaying = status === APP_STATUS.PLAYING;
        setStatus(!isPlaying ? APP_STATUS.PLAYING : APP_STATUS.PAUSED);
        setBtnColor(isPlaying ? 'green' : 'red');
    }
    return (<button 
        disabled={!status}
        style={{"color": btnColor}}
        onClick={() => play()}>
            {status === APP_STATUS.PLAYING ? "STOP" : "START"}
        </button>);
}

export default PlayAction;