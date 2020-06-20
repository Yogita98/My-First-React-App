import React from "react";

function FoodDetails({ name, measure, calories, onfoodClicked }) {
  return (
    <div onClick={() => onfoodClicked(name, calories)}>
      <span> {name} </span>
      <span> {measure} </span>
      <span> {calories} </span>
    </div>
  );
}

export default FoodDetails;
