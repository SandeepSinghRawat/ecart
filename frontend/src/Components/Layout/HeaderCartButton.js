import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import Context from "../../store/Context";

const HeaderCartButton = (props) => {
  const ctx = useContext(Context);
  const cartQuantity = ctx.items.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;