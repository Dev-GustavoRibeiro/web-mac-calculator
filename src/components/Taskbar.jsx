import React from 'react';
import appleLogo from '../assets/images/apple-logo.svg';
import wifiIcon from '../assets/images/wireless.svg';
import batteryIcon from '../assets/images/battery.svg';
import magnifyingGlassIcon from '../assets/images/magnifying-glass.svg';
import showDesktopIcon from '../assets/images/show-desktop.svg';

class Taskbar extends React.Component {
    render() {
        return (
            <div className="taskbar">
                <div className="options">
                    <img src={appleLogo} alt="appleLogo" className="appleLogo taskbar-icon" />
                    <p id="appOpenNow"><strong>Desktop</strong></p>
                    <p>File</p>
                    <p>Edit</p>
                    <p>View</p>
                    <p>Controls</p>
                    <p>Window</p>
                    <p>Help</p>
                </div>
                <div className="notifications">
                    <img src={wifiIcon} alt="wifi" className="taskbar-icon" />
                    <img src={batteryIcon} alt="battery" className="taskbar-icon battery" />
                    <p>Date</p>
                    <img src={magnifyingGlassIcon} alt="magnifyingGlass" className="taskbar-icon" />
                    <img src={showDesktopIcon} alt="showDesktop" className="taskbar-icon" />
                </div>
            </div>
        );
    }
}

export default Taskbar;