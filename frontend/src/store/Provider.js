import { useReducer } from "react";
import Context from "./Context";


const defaultCartState = {
  items: [],
  totalAmount: 0
};
const cartReducer = (preState, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = preState.items.concat(action.payload);
    const updatedAmount = preState.totalAmount + action.payload.price * action.payload.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    };
  }
  return defaultCartState;
};

const Provider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD_ITEM', payload: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE_ITEM', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    deleteItem: removeItemFromCartHandler
  };

  return <Context.Provider value={cartContext}>{props.children}</Context.Provider>
};

export default Provider;