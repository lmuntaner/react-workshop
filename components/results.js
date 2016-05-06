import React from 'react';
import ResultTrack from './result_track';

class Results extends React.Component {
  renderTracks() {
    if (this.props.tracks.length) {
      return this.props.tracks.map( track => {
        return <ResultTrack key={ track.id } saveTrack={ this.props.saveTrack } track={ track } />;  
      })
    }
    return null;
  }

  render() {
    return (
      <ul>
        { this.renderTracks() }
      </ul>
    )
  }
}

export default Results;
