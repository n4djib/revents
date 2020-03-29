import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";

class TestComponent extends Component {
  state = {
    latlng: {
      lat: 59.95,
      lng: 30.33
    }
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          latlng: latlng
        });
      })
      .catch(error => console.log("Error", error));
  };

  render() {
    const { latlng } = this.state;
    const { data, incrementCounter, decrementCounter, openModal } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The Answer is: {data}</h3>
        <Button onClick={incrementCounter} positive content="Increment" />
        <Button onClick={decrementCounter} negative content="Decrement" />
        <Button
          onClick={() => openModal("TestModal", { data: 42 })}
          color="teal"
          content="Open Modal"
        />
        <br />
        <br />
        <TestPlaceInput selectAddress={this.handleSelect} />
        <br />
        <SimpleMap key={latlng.lat + latlng.lng} latlng={latlng} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});

// const mapDispatchToProps = dispatch => ({
//     incrementCounter: () => dispatch(incrementCounter()),
//     decrementCounter: () => dispatch(decrementCounter())
// })

const actions = {
  incrementCounter,
  decrementCounter,
  openModal
};

export default connect(mapStateToProps, actions)(TestComponent);
// export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
