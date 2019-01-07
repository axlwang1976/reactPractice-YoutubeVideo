import React from 'react';

class SearchBar extends React.Component {
  state = {
    inputValue: ''
  };

  onInputChange = e => this.setState({ inputValue: e.target.value });

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onInputSubmit(this.state.inputValue);
  };

  render() {
    return (
      <div className="ui segment search-bar" onSubmit={this.onFormSubmit}>
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
