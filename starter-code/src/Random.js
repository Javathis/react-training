import React from 'react';

const Random = (props) => {

  let randomVal = Math.floor((Math.random() * `${props.max}`) + `${props.min}`)

  return (

    <p>Random value between {props.min} and {props.max} => {randomVal}</p>

  )
}

export default Random;