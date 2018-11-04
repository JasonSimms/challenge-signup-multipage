import React, { Component } from "react";

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      play: true
    };

    this.url = "./Local-forecast-elevator-music/Elevator-music.mp3";
    this.audio = new Audio(this.url);
    this.togglePlay = this.togglePlay.bind(this);
  }

  render() {
    this.audio.play();

    return (
      <button className="music-btn" onClick={this.togglePlay}>
        {this.state.play ? "Pause" : "Play"}
      </button>
    );
  }

  togglePlay() {
    this.setState({ play: !this.state.play });
    console.log(this.audio);
    this.state.play ? this.audio.play() : this.audio.pause();
  }
}

export default Music;
