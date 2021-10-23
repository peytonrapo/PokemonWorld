import React, {Component} from 'react';
import Grid from "./Grid";
import Controller from "./Controller";
import Login from "./Login";

interface AppState {
    location: [number, number] // x, y
    direction: string
    currScreen: string,
    trainerInfo: string
}

class App extends Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            location: [400, 400],
            direction: "front",
            currScreen: "start",
            trainerInfo: ""
        };
    }

    updateLocation = (newLocation: [number, number], newDirection: string) => {
        this.setState({
            location: newLocation,
            direction: newDirection
        });
    }

    updateTrainerInfo = (trainerInfo: string) => {
        this.setState({
            trainerInfo: trainerInfo
        });
    }

    startScreen = () => {
        this.setState({
           currScreen: "world"
        });
    }


    render() {
        const canvas_size = 800;
        if (this.state.currScreen === "world") {
            return (
                <div>
                    <Grid width={canvas_size} height={canvas_size} location={this.state.location}
                          direction={this.state.direction}/>
                    <Controller location={this.state.location} onChange={this.updateLocation}/>

                </div>
            );
        } else if (this.state.currScreen === "battle") {
            return (
                <div>
                    <h1>WIP</h1>
                </div>
            )
        } else { // default start screen
            return (
                <div>
                    <h1>Welcome to Pokemon World</h1>
                    <Login />
                </div>
            )
        }
    }

}

export default App;