import { useContext } from "react";
import Context from "../../../store/Context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props)=> {
  const cartCtx = useContext(Context);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount
    });
  };
  return <li className={classes.meal}>
    <div>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
    </div>
    <div>
      <MealItemForm onAddToCart={addToCartHandler}/>
    </div>
  </li>
};
export default MealItem;