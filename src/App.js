import React from "react";
import "./styles.css";
import FoodDetails from "./food-details";

const calorieData = [
  {
    name: "Milk",
    measure: "220 ml",
    calories: 150
  },
  {
    name: "Pizza",
    measure: "120 ml",
    calories: 200
  },
  {
    name: "Ghee",
    measure: "300 ml",
    calories: 500
  }
];

function Header({ heading }) {
  return <h1>{heading}</h1>;
}

function Data({ calorieData, tableClicked }) {
  return calorieData.map(({ name, measure, calories }) => (
    <FoodDetails
      key={name}
      name={name}
      measure={measure}
      calories={calories}
      onfoodClicked={tableClicked}
    />
  ));
}
function FoodClickedd({ name, calorieCount }) {
  return (
    <h2>
      {name} {calorieCount}
    </h2>
  );
}

class App extends React.Component {
  state = {
    foodClicked: "nothing",
    calorieCount: 0
  };

  foodClickedHander = (name, calories) => {
    this.setState({
      foodClicked: this.state.foodClicked + name,
      calorieCount: this.state.calorieCount + calories
    });
  };
  render() {
    return (
      <div className="App">
        <Header heading="Let's see how many calories" />
        <Data calorieData={calorieData} tableClicked={this.foodClickedHander} />
        <FoodClickedd
          name="Total Calories eaten today:"
          calorieCount={this.state.calorieCount}
        />
      </div>
    );
  }
}

export default App;
