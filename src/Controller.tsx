import React, {Component} from 'react';

interface ContollerState {
    currentText: string;
}

interface ControllerProps {
    location: [number, number];
    onChange(newLocation: [number, number], newDirection: string): void;
}

class Controller extends Component<ControllerProps, ContollerState> {
    constructor(props: ControllerProps) {
        super(props);
        this.state = {
            currentText: ""
        }
    }
    // since this is being handled by the textbook I should probably have it be
    // it's only file that can also handle the fight

    // may consider splitting up the direction & location update as direction changes less
    // but would mean this would need to keep track of direction
    handleMovement = (event: { key: string; }) => {
        const unit = 15;
        if(event.key === 'w'){ // go up one unit
            this.props.onChange([this.props.location[0] ,this.props.location[1] - unit], "back");
        }
        else if (event.key === 's') { // go down one unit
            this.props.onChange([this.props.location[0] ,this.props.location[1] + unit], "front");
        }
        else if (event.key === 'a') { // go left one unit
            this.props.onChange([this.props.location[0] - unit ,this.props.location[1]], "left");
        }
        else if (event.key === 'd') { // go right one unit
            this.props.onChange([this.props.location[0] + unit ,this.props.location[1]], "right");
        }
        this.setState({
            currentText: ""
        })
    }

    render() {
        return (
            <textarea onKeyPress={this.handleMovement} value={this.state.currentText}/>
        );
    }
}

export default Controller;