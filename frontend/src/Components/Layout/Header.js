import { Fragment } from "react";
import mealImage from "../../assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {

  return (
    <Fragment>
      console.log('yes');
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Meal Images"/>
      </div>
    </Fragment>
  )
};

export default Header;