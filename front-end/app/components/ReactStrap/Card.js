import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const CardRender = (props) => {
  return(
    <Card className="Card text-center">
      { props.img ? ( <CardImg className="Image" top src={props.img} /> ) : ( null ) }
      <CardBody>
        { props.name ? ( <CardTitle>{props.name}</CardTitle> ) : ( null ) }
        { props.description ? ( <CardText>{props.description}</CardText> ) : ( null ) }
        { props.btn ? ( <Button href={props.btn.link} target={props.btn.target} color={props.btn.color} block={props.btn.block}>{props.btn.text}</Button> ) : ( null ) }
      </CardBody>
    </Card>
  )
};

export default CardRender;
