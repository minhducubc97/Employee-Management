import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer bg-dark pt-2">
          <span className="text-light">
            All right reserved 2021 @Duc Nguyen
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
