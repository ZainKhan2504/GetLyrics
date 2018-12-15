import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Navbar from "../layout/Navbar";

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => {
        this.setState({ track: res.data.message.body.track });
      })
      .catch(err => console.log(err));
  }
  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  render() {
    const { track, lyrics } = this.state;
    console.log(track);

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return (
        <div>
          <Navbar />
          <Spinner />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <Navbar />;
          <div className="container">
            <Link to="/index" className="btn btn-dark btn-sm mb-4">
              Go Back
            </Link>
            <div className="card">
              <h5 className="card-header">
                {this.Capitalize(track.track_name)} by{" "}
                <span className="text-secondary">{track.artist_name}</span>
              </h5>
              <div className="card-body">
                <p className="card-text">{lyrics.lyrics_body}</p>
              </div>
            </div>
            <ul className="list-group mt-3">
              <li className="list-group-item">
                <strong>Album ID</strong>: {track.album_id}
              </li>
              <li className="list-group-item">
                <strong>Song Genre</strong>:{" "}
                {track.primary_genres.music_genre_list.length === 0
                  ? "Not Given"
                  : track.primary_genres.music_genre_list[0].music_genre
                      .music_genre_name}
              </li>
              <li className="list-group-item">
                <strong>Explicit</strong>: {track.explicit === 0 ? "No" : "Yes"}
              </li>
              <li className="list-group-item">
                <strong>Release Date</strong>:{" "}
                <Moment format="DD/MM/YYYY">{track.first_release_date}</Moment>
              </li>
            </ul>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;
