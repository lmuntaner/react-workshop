import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuery: ''
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={ this.state.currentQuery } onChange={ this.handleChange.bind(this) }/>
        <button onClick={ this.search.bind(this) }>Search</button>
      </div>
    )
  }

  handleChange(e) {
    const query = e.target.value;
    this.setState({
      currentQuery: query
    });
  }

  search() {
    this.props.searchTrack(this.state.currentQuery);
  }
}

export default Search;
