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
          <div className='Number_orta'>
          <p className='aciklama'>{this.props.numara}</p>
          </div>
          <div className='Number_right'>
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-comment-sms"></i>
          </div>
          <div className='Number_right'>
          <i onClick={this.props.onDelete} className="fa-solid fa-trash"></i>
          <i onClick={this.props.onChange} className="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
      );
    }
  }
}

export default Number;
