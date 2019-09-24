import React from 'react';

const CreditCard = {props} => {
  return (
    <div>
        <p>{props.type}</p>
        <p>{props.number}</p>
        <p>Expires: {props.expirationMonth}/{props.expirationYear}</p>
        <p>{props.owner}</p>
        <p>{props.bgColor}</p>
        <p>{props.color}</p>
      </div>
  )
} 

export default CreditCard;