import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PetsContainer = () => {
  const pets = useSelector(state => state.pets);
  useEffect(() => {
    console.log(pets);
  });

  return <div>hello</div>;
};

export default PetsContainer;
