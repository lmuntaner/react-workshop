import React from 'react';
import Preview from './preview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {
        title: '',
        body: ''
      },
      style: {
        color: '#222',
        backgroundColor: '#ddd'
      }
    };
  }

  render() {
    console.log(this.state.savedTracks);
    return (
      <div>
        <div className="col-4 top">
          <input type="text" value={ this.state.text.title } onChange={ this.handleChange.bind(this) }/>
        </div>
        <div className="col-8 top">
          <Preview style={ this.state.style } text={ this.state.text } />
        </div>
      </div>
    );
  }

  handleChange(e) {
    const newTitle = e.target.value;
    this.setState({
      text: {
        title: newTitle
      }
    });
  }
}

export default App;
