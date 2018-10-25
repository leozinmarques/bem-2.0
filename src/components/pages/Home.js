import React, {Component} from 'react';
import '../../styles/css/Home.css';
import $ from 'jquery';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
        parentHover: false, color: "rgba(255,0,0,0.2)", transition: "all 0.4s"
    }

    this.mouseOver = event => {
      console.log(event);
      this.setState({
        parentHover: true
      });
    }

    this.mouseOut = event => {
      this.setState({
        parentHover: false
      });
    }
  }

  render(){
    return(
      <div className="menu" style={this.state.parentHover ? {"backgroundColor": this.state.color, "transition": this.state.transition} : {"transition": this.state.transition}}>
        <div className="middle">
          <div className="menu-item btn-sobre" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></div>
          <div className="menu-item btn-questionario" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></div>
          <div className="menu-item btn-estresse" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></div>
          <div className="menu-item btn-depressao" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></div>
          <div className="menu-item btn-ansiedade" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></div>
          <div className="menu-item btn-login" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></div>
        </div>
      </div>
    );

  }
}
