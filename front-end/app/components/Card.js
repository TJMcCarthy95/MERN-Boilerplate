import React from "react";

export default function CardRender(props) {
  return (
    <div className="card text-center">
      { props.img && <img className="card-img-top" src={require(`../assets/images/${props.img}`)} alt={props.name} /> }
      <div className="card-body">
        { props.name && <h5 className="card-title">{props.name}</h5> }
        { props.description && <p className="card-text">{props.description}</p> }
      </div>
      <div className="card-footer">
        { props.btn && <a href={props.btn.link} className="btn btn-primary">{props.btn.text}</a> }
      </div>
    </div>
  );
}
