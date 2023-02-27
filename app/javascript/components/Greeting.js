import React from 'react';
import { useSelector  } from 'react-redux';
const Greeting = () => {
  const initialState = useSelector((state) => state.greetings);

  console.log("Initial state:", initialState);

  return (
    <div>
      <h1>{`State => ${initialState}`}</h1>
    </div>
  )
};

export default Greeting;