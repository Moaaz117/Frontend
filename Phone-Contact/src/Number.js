import React from 'react';
import './App.css';

class Number extends React.Component {
  render() {
    if (this.props.name !== ""&&this.props.description !== "") {
      return (
        <div className='Number'>
          <div className='Number_left'>
            <p className='name'>{this.props.name}</p>
            <p className='ozellik'>{this.props.description}</p>
          </div>
          <div className='Number_right'>
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-comment-sms"></i>
            <i onClick={this.props.onDelete} className="fa-solid fa-trash"></i>
          </div>
        </div>
      );
    }
  }
}

export default Number;
