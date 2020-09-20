import React from "react";
import "./styles/app.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "",
      btnClick: false,
    };
  }
  render() {
    const { img, btnClick } = this.state;
    return (
      <div className="img_box">
        <div className="sc">
          {btnClick ? (
            <img src={img} />
          ) : (
            <div className="sc__m">Loading photos...</div>
          )}
        </div>

        <div className="img_btn">
          <div>
            <input
              type="button"
              value="img1"
              onClick={this._imgHandler1}
            ></input>
          </div>

          <div>
            <input
              type="button"
              value="img2"
              onClick={this._imgHandler2}
            ></input>
          </div>

          <div>
            <input
              type="button"
              value="img3"
              onClick={this._imgHandler3}
            ></input>
          </div>

          <div>
            <input
              type="button"
              value="img4"
              onClick={this._imgHandler4}
            ></input>
          </div>
        </div>
      </div>
    );
  }

  _imgHandler1 = () => {
    this.setState({
      btnClick: false,
    });

    setTimeout(() => {
      this.setState({
        btnClick: true,
      });
    }, 1000);

    this.setState({
      img: img1,
    });
  };

  _imgHandler2 = () => {
    this.setState({
      btnClick: false,
    });

    setTimeout(() => {
      this.setState({
        btnClick: true,
      });
    }, 1000);

    this.setState({
      img: img2,
    });
  };

  _imgHandler3 = () => {
    this.setState({
      btnClick: false,
    });

    setTimeout(() => {
      this.setState({
        btnClick: true,
      });
    }, 1000);

    this.setState({
      img: img3,
    });
  };

  _imgHandler4 = () => {
    this.setState({
      btnClick: false,
    });

    setTimeout(() => {
      this.setState({
        btnClick: true,
      });
    }, 1000);

    this.setState({
      img: img4,
    });
  };
}

export default App;
