import React from "react";
import { Card, CardContent, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  const {image, name, species, status} = props.character;
  // return <span>todo: character</span>;
  return(
    <Card>
      <Image src={image} />
      <CardContent>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{species}, {status}</Card.Meta>
      </CardContent>
    </Card> 
  );
}
