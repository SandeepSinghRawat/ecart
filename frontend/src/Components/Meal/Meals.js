import { Fragment } from "react";
import MealAvailability from "./MealAvailablity";
import MealSummary from "./MealSummary";

const Meals = (props)=> {

return <Fragment>
  <MealSummary />
  <MealAvailability />
</Fragment>
};

export default Meals;