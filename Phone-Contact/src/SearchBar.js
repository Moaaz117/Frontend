import React from 'react';
import './App.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='Search-bar'>
        <input
          type='text'
          className='Search-input'
          placeholder='Search'
          onChange={this.props.onSearch}
        />
        <i onClick={this.props.onAdd} className="fa-solid fa-plus"></i>
      </div>
    );
  }
}

export default SearchBar;
