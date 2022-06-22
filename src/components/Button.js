import React from 'react';

const Button = ({ handleClick }) => {
  return <button onClick={handleClick}>Get new anecdote</button>;
};

export default Button;
