import { Component } from "react";

export class Home extends Component {
  private canvas?: HTMLCanvasElement;

  render() {
    return (
      <div>
        <h1>{this.canvas?.height}</h1>
        <canvas ref={(_) => (this.canvas = _ || undefined)} />
      </div>
    );
  }
}
