import React from "react";
import { useSelector } from "react-redux";
import Counter from "../components/Counter";

const CounterContainer = () => {
  const counter = useSelector(state => state.counter, []);
  return <Counter />;
};

export default CounterContainer;
