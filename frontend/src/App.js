import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meal/Meals";
import Provider from "./store/Provider";
function App() {
  const [displayCart, setDisplayCart] = useState(false);
  
  const showCartHandler = (event) => {
    setDisplayCart(true);
  };
  
  const hideCartHandler = (event) => {
    setDisplayCart(false);
  };
  
  return (
    <Provider>
      {displayCart && <Cart onClick={hideCartHandler}/>}
      <Header onClick={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Provider>
  );
}

export default App;
