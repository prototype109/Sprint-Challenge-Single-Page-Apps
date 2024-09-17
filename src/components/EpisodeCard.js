import React from "react";
import { Card, CardContent } from 'semantic-ui-react';

export default function EpisodeCard(props) {
  const {name, air_date, episode} = props.episode
  return(
    <Card>
      <CardContent>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{air_date}</Card.Meta>
      </CardContent>
      <CardContent>
        {episode}
      </CardContent>
    </Card> 
  );
}
