import React from "react";

export default class MyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("here");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
    this.props.handler({ yo: "yo" });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
    this.props.handler({ yo: "yo" });
  }

  render() {
    const styles = `.my-counter * {
          font-size: 200%;
        }

        .my-counter span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        .my-counter button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 5px;
          background-color: steelblue;
          color: white;
        }`;

    return (
      <div className="my-counter">
        <style>{styles}</style>
        <button onClick={() => this.decrement()}>-</button>
        <span>{this.state.count}</span>

        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}
