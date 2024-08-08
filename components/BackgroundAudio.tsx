import useSound from 'use-sound';
import { mdiVolumeHigh, mdiVolumeOff } from '@mdi/js';
import Icon from '@mdi/react';
import { useState } from 'react';

const BackgroundAudio = () => {
    const [playing, setPlaying] = useState(false)
    const [play, { stop }] = useSound('/chirp.mp3');
    
    const toggle = () => {
        if(!playing) {
            play()
        } else {
            stop()
        }
        setPlaying(!playing)
    }
    
    const Play = () => {
        return (<button className="round-button center" onClick={() => {toggle()}}>
            <Icon path={mdiVolumeOff} size={1} color="var(--secondary-bg-color)" />
        </button>)
    }

    const Pause = () => {
        return (<button className="round-button center" onClick={() => {toggle()}}>
            <Icon path={mdiVolumeHigh} size={1} color="var(--secondary-bg-color)" />
        </button>)
    }

    return (
        <div className="floating-audio-toggle">
            {playing ? <Pause /> : < Play />}
        </div>
    )
};

export default BackgroundAudio