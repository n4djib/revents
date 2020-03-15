import React, { Component } from "react";
import { Segment, Item, Icon, Button, List } from "semantic-ui-react";

import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const {
      title,
      hostPhotoURL,
      // hostedBy,
      attendees,
      date,
      venue,
      description
    } = this.props.event;

    const { event, selectEvent, deleteEvent } = this.props;

    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={hostPhotoURL} />
              <Item.Content>
                <Item.Header>{title}</Item.Header>
                <Item.Description></Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {date} |
            <Icon name="marker" /> {venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {attendees &&
              attendees.map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{description}</span>
          <Button
            onClick={() => deleteEvent(event.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            onClick={() => selectEvent(event)}
            as="a"
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;