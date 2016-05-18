### JSX

This:

```javascript
var child = React.createElement('li', null, 'Text Content');
var root = React.createElement('ul', { className: 'my-list' }, child);
```

Is the same as this:

```javascript
var root = <ul className="my-list">
             <li>Text Content</li>
           </ul>;
```

### Difference between `react.createClass` vs `extends React.Component`

1. Syntax + `constructor`
2. `propTypes`, `getDefaultProps` and `getInitialState`
3. `this` binding
4. mixins

Recommendation: *Facebook does suggest the future removal of React.createClass completely in favour of ES6 classes.*

We found `extends React.Component` to be more easily tested.

### Check the bundle

Running:

```
$ webpack
```

While inside the folder, will compile the code and create the `index.js` in the same folder. Then you can take a look at it.

`webpack-dev-server`: The dev server uses webpack’s watch mode. It also prevents webpack from emitting the resulting files to disk. Instead it keeps and serves the resulting files from memory.

### Refactor Color Change

**First Refactor**

Use ES6 syntax for object keys as values

```
handleColorChange(color, e) {
  const newColor = e.target.value;
  const newBackgroundColors = { ...this.state.backgroundColors, ...{ [color]: newColor } };
  this.setState({
    backgroundColors: newBackgroundColors
  })
}
```

**Second Refactor**

Create a new Component

```
class InputRange extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={ this.props.color }>{ this.props.label }</label>
        <input type="range" min={0} max={255} value={ this.props.value } onChange={ this.props.handleChange } id={ this.props.color }/>
      </div>
    );
  }
}
```

**Third Refactor**

Stateless Functional Component

```
const InputRange = props => {
  return (
    <div>
      <label htmlFor={ props.color }>{ props.label }</label>
      <input type="range" min={0} max={255} value={ props.value } onChange={ props.handleChange } id={ props.color }/>
    </div>
  )
};
```

With ES6 descontruction of the params

```
const InputRange = ({ color, label, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={ color }>{ label }</label>
      <input type="range" min={0} max={255} value={ value } onChange={ handleChange } id={ color }/>
    </div>
  )
};
```
