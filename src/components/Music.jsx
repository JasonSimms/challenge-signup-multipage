import React, { Component } from "react";

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false
    };

    this.url = "./Local-forecast-elevator-music/Elevator-music.mp3";
    this.audio = new Audio(this.url);
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    // this.togglePlay();
    this.audio.play();
  }

  render() {
    return (
      <button className="music-btn" onClick={this.togglePlay}>
        {this.state.play ? "Play" : "Pause"  }
      </button>
    );
  }

  togglePlay() {
    this.setState(prevState => ({ play: !prevState.play}))
    // this.setState({ play: !this.state.play });
    console.log(this.audio);
    this.state.play ? this.audio.play() : this.audio.pause();
  }
}

export default Music;
