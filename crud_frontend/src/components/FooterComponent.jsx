import React, { Component } from "react";

export class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <span className="text-menu">
            All Rights Reserved 2020 @JavaGuides
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
