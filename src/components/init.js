import React from "react";

class Init extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loading">
        <div className="loading__j1"></div>
        <div className="loading__j2"></div>
        <div className="loading__b1"></div>
        <div className="loading__b2"></div>
      </div>
    );
  }
}

export default Init;