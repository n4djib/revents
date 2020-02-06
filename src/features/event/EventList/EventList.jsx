import React, { Component } from "react";
// import { Menu, Container, Button } from 'semantic-ui-react'
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    return (
      <div>
        {
          this.props.events.map(
            event => (<EventListItem key={event.id} event={event} />)
          )
        }
      </div>
    );
  }
}

export default EventList;
