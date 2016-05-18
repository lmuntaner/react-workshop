import React from 'react';

class Preview extends React.Component {
  static propTypes = {
    style: React.PropTypes.object,
    text: React.PropTypes.object
  }
  render() {
    const finalStyle = { ...this.props.style, ...this.backgroundStyle() };
    return (
      <div style={ finalStyle }>
        <h3>{ this.props.text.title }</h3>
        <p>{ this.props.text.body }</p>
      </div>
    );
  }
  backgroundStyle() {
    const backgroundColor = `rgb(${this.props.backgroundColors.red}, ${this.props.backgroundColors.green}, ${this.props.backgroundColors.blue})`;
    return {
      backgroundColor
    };
  }
}

export default Preview;
