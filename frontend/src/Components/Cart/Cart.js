import { useContext } from "react";
import Context from "../../store/Context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
const Cart = (props) => {
  const cartCtx = useContext(Context);

  const cartItemRemoveHandler = (id) => {
    cartCtx.deleteItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />)}</ul>
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  return <Modal onClick={props.onClick}>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
      {hasItems && <button className={classes.button}>Order</button>}
    </div>
  </Modal>;
};
export default Cart;