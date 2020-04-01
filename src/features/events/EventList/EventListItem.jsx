import React, { Component } from "react";
import { Segment, Item, Icon, Button, List } from "semantic-ui-react";

import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";
import { format } from 'date-fns'

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

    const { event, deleteEvent } = this.props;

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
            <Icon name="clock" /> { format(date.toDate(), 'EEEE do LLLL') } |
            <Icon name="marker" /> {venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {attendees &&
              Object.values(attendees).map((attendee, index) => (
                <EventListAttendee key={index} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <div>{description}</div>
          <Button
            onClick={() => deleteEvent(event.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            as={Link}
            to={`/events/${event.id}`}
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
