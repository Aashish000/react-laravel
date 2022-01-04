import React from 'react';

import Timer from './Timer';

class TimerContainer extends React.Component {
    render() { 
        return (
            <div>
                <Timer
                    time={this.props.time}
                    num={this.props.num}
                    onComplete={this.props.onComplete}
                />
            </div>
        );
    }

}

export default TimerContainer;