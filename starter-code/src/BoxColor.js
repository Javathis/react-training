import React from 'react';

const BoxColor = props => {

  let style = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`
  }

  return (
    <h1 style={style}>THIS IS AN EXAMPLE</h1>
  )
}

export default BoxColor;