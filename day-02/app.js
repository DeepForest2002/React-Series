import React from "react";

const element = <h1 id="h1tag">Hello world</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// good practice

React.createElement(
  div,
  null,
  React.createElement(h1, null, "Hello world"),
  React.createElement(h2, null, "This is react"),
);

const element2 = (
  <div>
    <h1>Hello World</h1>
    <h2>This is react</h2>
  </div>
);
