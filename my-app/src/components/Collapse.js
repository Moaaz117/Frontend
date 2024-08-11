import React from "react";

class Collapse extends React.Component {

  constructor() {
    super();
    this.state = {
      showContact: false
    }
    
  }

  componentDidMount(){
    console.log("Component oluşturuldu")
  }
 
  componentDidUpdate(){
    console.log("Component güncellendi")
  }

 showMore=()=>{
  this.setState({showContact:!this.state.showContact})
 }
  render() {
    return (
      <div className="card">
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {this.props.children.props.cardTitle}
        </button>

        {
          this.state.showContact ? (
            <div className="collapse show" id={this.props.href}>
              {this.props.children}
            </div>

          ):null
        }
      </div>
    );
  }
};
export default Collapse;