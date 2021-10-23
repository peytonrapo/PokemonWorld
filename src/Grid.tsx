import React, {Component} from 'react';

interface GridProps {
    width: number;   // width of the canvas on which to draw
    height: number;  // height of the canvas on which to draw
    location: [number, number];
    direction: string;
}

interface GridState {
    character: any;  // image object rendered into the canvas (once loaded)
}

class Grid extends Component<GridProps, GridState> {

    canvasReference: React.RefObject<HTMLCanvasElement>

    constructor(props: GridProps) {
        super(props);
        this.state = {
            character: null,  // An image object to render into the canvas.
        };
        this.canvasReference = React.createRef();
    }

    componentDidMount() {
        // Since we're saving the image in the state and re-using it any time we
        // redraw the canvas, we only need to load it once, when our component first mounts.
        this.fetchAndSaveImage();
        this.redraw();
    }

    componentDidUpdate() {
        this.fetchAndSaveImage();
        this.redraw();
    }

    fetchAndSaveImage() {
        // Creates an Image object, and sets a callback function
        // for when the image is done loading (it might take a while).
        const avatar = new Image();
        avatar.onload = () => {
            this.setState({
                character: avatar
            });
        };
        // Once our callback is set up, we tell the image what file it should
        // load from. This also triggers the loading process.
        avatar.src = "./images/avatar/" + this.props.direction +".png";
    }

    redraw = () => {
        if (this.canvasReference.current === null) {
            throw new Error("Unable to access canvas.");
        }
        const ctx = this.canvasReference.current.getContext('2d');
        if (ctx === null) {
            throw new Error("Unable to create canvas drawing context.");
        }

        // First, let's clear the existing drawing so we can start fresh:
        ctx.clearRect(0, 0, this.props.width, this.props.height);

        this.drawGrid(ctx);
        if (this.state.character !== null) {
            ctx.drawImage(this.state.character, this.props.location[0], this.props.location[1], 50, 50);
        }

    };

    drawGrid(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(this.props.width,0);
        ctx.lineTo(this.props.width, this.props.height);
        ctx.lineTo(0, this.props.height);
        ctx.lineTo(0,0);
        ctx.stroke();
    }



    render() {
        return (
            <div id="grid">
                <canvas ref={this.canvasReference} width={this.props.width} height={this.props.height}/>
            </div>
        );
    }
}

export default Grid;