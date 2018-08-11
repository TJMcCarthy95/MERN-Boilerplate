import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

const JumbotronRender = (props) => {
  const BodyComponents = props.bodyComponents
  return(
    <Jumbotron fluid={props.fluid} className={props.class}>
      { props.title ? ( <h1 className="display-3">{props.title}</h1> ) : ( null ) }
      { props.subTitle ? ( <p className="lead">{props.subTitle}</p> ) : ( null ) }
      { props.break ? ( <hr /> ) : ( null ) }
      { props.bodyText ? ( <p>{props.bodyText}</p> ) : ( null ) }
    </Jumbotron>
  )
};

export default JumbotronRender;
