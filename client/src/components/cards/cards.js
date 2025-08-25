import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <h1 className="card-title">{props.name}</h1>
      <p className="card-const">Valor R$ {props.cost}</p>
      <p className="card-category">Categoria: {props.category}</p>
    </div>
  );
}
