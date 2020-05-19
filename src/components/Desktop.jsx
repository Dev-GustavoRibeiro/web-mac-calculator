import React from 'react';
import '../styles/desktop.css';
import Taskbar from './Taskbar';

class Desktop extends React.Component {
    render() {
        return (
            <div className="desktop">
                <Taskbar />
            </div>
        );
    }
}

export default Desktop;