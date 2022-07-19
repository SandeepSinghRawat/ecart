import Context from "./Context";

const Provider = (props) => {

  const addItemToCartHandler = (item) => {

  };

  const removeItemFromCartHandler = (id) => {

  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    deleteItem: removeItemFromCartHandler
  };

  return <Context.Provider value={cartContext}>{props.children}</Context.Provider>
};

export default Provider;