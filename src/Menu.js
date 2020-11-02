import React from "react";
import Row from "./Row.js";
import "./styles.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: [
        "#03045e",
        "#023e8a",
        "#0077b6",
        "#0096c7",
        "#00b4d8",
        "#48cae4",
        "#90e0ef",
        "#ade8f4",
        "#caf0f8"
      ],
      middle: [
        "#ffadad",
        "#ffd6a5",
        "#fdffb6",
        "#caffbf",
        "#9bf6ff",
        "#a0c4ff",
        "#bdb2ff",
        "#ffc6ff"
      ],
      bottom: [
        "#03071e",
        "#370617",
        "#6a040f",
        "#9d0208",
        "#d00000",
        "#dc2f02",
        "#e85d04",
        "#f48c06",
        "#faa307",
        "#ffba08"
      ],
      height: ['100px', '150px', '300px']
    };
  }
  render() {
    const bottom = this.state.bottom;
    const middle = this.state.middle;
    const top = this.state.top;
    const height = this.state.height;
    return (
      <div className="menu">
        <Row className="row" colors={top} height={height[0]} />
        <Row className="row" colors={middle} height={height[1]} />
        <Row className="row" colors={bottom} height={height[2]} />
      </div>
    );
  }
}
export default Menu;
