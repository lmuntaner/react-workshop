import React from 'react';

class Preview extends React.Component {
  static propTypes = {
    style: React.PropTypes.object,
    text: React.PropTypes.object
  }
  render() {
    return (
      <div style={ this.props.style }>
        <h3>{ this.props.text.title }</h3>
        <p></p>
      </div>
    );
  }
}

export default Preview;
