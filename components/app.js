import React from 'react';
import Preview from './preview';
import InputRange from './range';

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
        fontWeight: 'normal'
      },
      backgroundColors: {
        red: 220,
        green: 220,
        blue: 220
      }
    };
  }

  render() {
    return (
      <div>
        <div className="col-4 top">
          <div>
            <input type="text" value={ this.state.text.title } onChange={ this.handleTitleChange.bind(this) }/>
          </div>
          <div>
            <textarea value={ this.state.text.body } onChange={ this.handleBodyChange.bind(this) } />
          </div>
          <div>
            <label htmlFor="bold">Bold</label>
            <input type="radio" value="bold" onClick={ this.handleRadio.bind(this) } name="fontWeigth" id="bold"/>
            <label htmlFor="normal">Normal</label>
            <input type="radio" value="normal" onClick={ this.handleRadio.bind(this) } name="fontWeigth" id="normal"/>
          </div>
          <InputRange color="red" value={ this.state.backgroundColors.red } handleChange={ this.handleColorChange.bind(this, 'red')} label="RED"/>
          <InputRange color="green" value={ this.state.backgroundColors.green } handleChange={ this.handleColorChange.bind(this, 'green')} label="GREEN"/>
          <InputRange color="blue" value={ this.state.backgroundColors.blue } handleChange={ this.handleColorChange.bind(this, 'blue')} label="BLUE"/>
        </div>
        <div className="col-8 top">
          <Preview style={ this.state.style } text={ this.state.text } backgroundColors={ this.state.backgroundColors }/>
        </div>
      </div>
    );
  }

  handleBodyChange(e) {
    const newBody = e.target.value;
    const newText = { ...this.state.text, ...{ body: newBody } }
    this.setState({
      text: newText
    });
  }

  handleColorChange(color, e) {
    const newColor = e.target.value;
    const newBackgroundColors = { ...this.state.backgroundColors, ...{ [color]: newColor } };
    this.setState({
      backgroundColors: newBackgroundColors
    })
  }

  handleRadio(e) {
    const newFontWeight = e.target.value;
    const newStyle = { ...this.state.style, ...{ fontWeight: newFontWeight }};
    this.setState({
      style: newStyle
    });
  }

  handleTitleChange(e) {
    const newTitle = e.target.value;
    const newText = { ...this.state.text, ...{ title: newTitle } }
    this.setState({
      text: newText
    });
  }
}

export default App;
