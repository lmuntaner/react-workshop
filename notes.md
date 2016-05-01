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

