import React from "react";
import { Card, CardContent } from 'semantic-ui-react';

export default function LocationCard(props) {
  const {name, type, dimension, residents} = props.location
  return(
    <Card>
      <CardContent>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{type}, {dimension}</Card.Meta>
      </CardContent>
      <CardContent>
        {residents.length}
      </CardContent>
    </Card> 
  );
}
