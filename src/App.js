import React from 'react';

const Food = ({ fav }) => {
  return <h1>I LOVE {fav}</h1>;
};

const App = () => {
  return <Food fav="PIZZA" hey="hey" />;
};

export default App;
