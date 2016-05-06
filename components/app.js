import React from 'react';
import qs from 'qs';
import superagent from 'superagent';
import promiseWraper from 'superagent-promise';
const requester = promiseWraper(superagent, Promise);
import Search from './search';
import Results from './results';
import MyTracks from './my_tracks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedTracks: [],
      tracks: []
    };
    this.baseUrl = 'https://api.spotify.com/v1/search';
  }

  render() {
    console.log(this.state.savedTracks);
    return (
      <div>
        <Search currentQuery={ this.state.currentQuery } searchTrack={ this.searchTrack.bind(this) }/>
        <Results tracks={ this.state.tracks } saveTrack={ this.saveTrack.bind(this) }/>
        <MyTracks tracks={ this.state.savedTracks } />
      </div>
    );
  }

  saveTrack(track) {
    const newSavedTracks = this.state.savedTracks;
    newSavedTracks.push(track);
    this.setState({
      savedTracks: newSavedTracks
    });
  }

  searchTrack(query) {
    const params = {
      q: query,
      type: 'track'
    };
    const queryParams = qs.stringify(params);
    const url = `${this.baseUrl}?${queryParams}`;
    requester.get(url)
      .then( response => {
        const tracks = response.body.tracks.items;
        this.setState({
          tracks
        });
      })
      .catch( err => {
        console.log('something happened!');
      });
  }
}

export default App;
