import React from 'react';

class ResultTrack extends React.Component {
  render() {
    const { track } = this.props;
    return (
      <li>
        { track.name }
        <a className="track__save" onClick={ this.save.bind(this) }>Save</a>
      </li>
    );
  }

  save() {
    this.props.saveTrack(this.props.track);
  }
}

export default ResultTrack;
