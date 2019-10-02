import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllDogs, SelectDogsAndCats } from "./selectors";

const PetsContainer = () => {
  const dogs = useSelector(selectAllDogs);
  const dogsAndCats = useSelector(SelectDogsAndCats);
  useEffect(() => {
    console.log(dogsAndCats);
  }, [dogs, dogsAndCats]);

  return <pre>{JSON.stringify(dogsAndCats, null, 2)}</pre>;
};

export default PetsContainer;
