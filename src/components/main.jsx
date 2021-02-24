import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import { Increment, Decrement, AddNewData } from "../store/actons";
class main extends Component {
  state = { textdata: "" };

  AddData() {
    this.props.AddNewData(this.state.textdata);
  }

  increment() {
    this.props.Increment();
  }

  decrement() {
    this.props.Decrement();
  }

  componentDidMount() {
    console.log("prop", this.props);
  }
  render() {
    return (
      <>
        <div className="card text-white bg-dark p-3 p-md-5 text-center">
          <h5>Register New Web app here</h5>
          <div className="text-center">
            <input
              value={this.state.textdata}
              onChange={e => this.setState({ textdata: e.target.value })}
              placeholder="add new website list"
              className="btn btn-group m-2 bg-white"
            />
            <button
              onClick={() => {
                this.AddData();
              }}
              className="btn btn-primary rounded-circle m-2"
            >
              +
            </button>
            <p>Work with counter</p>
            <button
              className="btn btn-success m-2"
              onClick={() => {
                this.increment();
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                this.decrement();
              }}
              className="btn btn-danger m-2"
            >
              {" "}
              -
            </button>
          </div>
        </div>
      </>
    );
  }
}

main.propTypes = {
  Increment: PropTypes.func.isRequired,
  Decrement: PropTypes.func.isRequired,
  AddNewData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  Number: state.Number,
  Data: state.Data
});

export default connect(
  mapStateToProps,
  { Increment, Decrement, AddNewData }
)(main);
