import React, { useState } from "react";
import { Segment, Button, Grid, Icon } from "semantic-ui-react";
import EventDetailedMap from "./EventDetailedMap";

const EventDetailedInfo = ({ event }) => {
  const [isMapOpen, showMapToggle] = useState(false);
  const { lat, lng } = event.venueLatLng;

  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{event.date}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>Event Venue</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              onClick={() => showMapToggle(!isMapOpen)}
              color="teal"
              size="tiny"
              content={isMapOpen ? "Hide map" : "Show map"}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {isMapOpen ? <EventDetailedMap lat={lat} lng={lng} /> : null}
    </Segment.Group>
  );
};

export default EventDetailedInfo;
