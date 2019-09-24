import React from "react";

const IdCard = (props) => {
  return (
    <div>
      <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
      </div>
      <div>
        <img src={props.picture}></img>
      </div>
    </div>
  );
};

export default IdCard;