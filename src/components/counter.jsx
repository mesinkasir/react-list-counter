import React, { Component } from "react";
import { connect } from "react-redux";
class counter extends Component {
  state = { Num: 1 };
  componentDidMount() {
    //   console.log('counterProps', this.props);
    this.props.store.subscribe(() => {
      this.setState({ Num: this.props.store.getState().Number });
    });
    this.setState({ Num: this.props.Number });
  }
  render() {
    return (
      <>
        <div className="card text-white bg-danger p-3 rounded-circle text-center">
          <h3>{this.state.Num}</h3>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  Number: state.Number
});

export default connect(mapStateToProps)(counter);
