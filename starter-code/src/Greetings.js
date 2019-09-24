import React from "react";

const Greetings = (props) => {
  let lang = {
    de: "hallo",
    en: "hello",
    es: "hola",
    fr: "bonjour"
  }
  return (
    <p>{lang[props.lang]} {props.children}</p>

  );
};

export default Greetings;