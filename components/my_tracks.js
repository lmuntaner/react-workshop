import React from 'react';

class MyTracks extends React.Component {
  renderTracks() {
    if (this.props.tracks.length) {
      return this.props.tracks.map( track => {
        return <li key={ track.id }>{ `Saved: ${track.name}` }</li>
      });
    }
    return false;
  }

  render() {
    return (
      <ul>
        { this.renderTracks() }
      </ul>
    )
  }
}

export default MyTracks;
