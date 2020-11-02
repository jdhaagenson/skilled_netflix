import React from "react";
import Card from "./Card.js";
// import "./styles.css"

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: ""
    };
  }
  componentDidMount = (props) => {

  };
  handleColor = (div, color) => {
      div.style.backgroundColor = color;
  }

  render(props) {
    return (
      <div className="row">
        {this.props.colors.map((color) => 
          <Card id_name={this.props.id} color={color} height={this.props.height} />
        )}
      </div>
    );
  }
}

export default Row;