import { useReducer } from "react";
import Context from "./Context";


const defaultCartState = {
  items: [],
  totalAmount: 0
};
const cartReducer = (preState, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedAmount = preState.totalAmount + action.payload.price * action.payload.amount;
    const existingCartItemIndex = preState.items.findIndex(item => item.id === action.payload.id);
    const existingCartItem = preState.items[existingCartItemIndex];
    let updatedItems;
    
    if (existingCartItem) {
      let updatedItem;
      updatedItem = {
        ...existingCartItem,
        amount: JSON.parse(existingCartItem.amount) + JSON.parse(action.payload.amount)
      }
      console.log("updatedItems", updatedItem);
      console.log('existing items', existingCartItem);
      updatedItems = [...preState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // updatedItem = {...action.payload};
      updatedItems = preState.items.concat(action.payload);
    }

    // const updatedItems = preState.items.concat(action.payload);
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = preState.items.findIndex(item => item.id === action.id);
    const existingCartItem = preState.items[existingCartItemIndex];
    let updatedTotalAmount = preState.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = preState.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
      updatedItems = [...preState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {items: updatedItems, totalAmount: updatedTotalAmount};
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