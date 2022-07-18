import { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meal/Meals";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
