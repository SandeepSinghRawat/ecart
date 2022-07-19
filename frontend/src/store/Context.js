import { createContext } from "react";

const input = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  deleteItem: (id) => {}
}

const Context = createContext(input);

export default Context;