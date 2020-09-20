import React from "react";
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Button />
        <Button />
      </div>
    );
  }
}
export default App;
