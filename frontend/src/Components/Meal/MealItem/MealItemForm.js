import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props)=> {
  const amountInputRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true);
  const submitHandler = (event)=> {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1|| enteredAmountNumber > 5) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };
  return (
  <form className={classes.form} onSubmit={submitHandler}>
    <Input label="Amount" input={{
      ref: amountInputRef,
      id: 'amount',
      type: "number",
      min: 1,
      max: 5,
      step: 1,
      defaultValue: "1"
    }}/>
    <button>+ Add</button>
    {!isAmountValid && <p>Please enter a valid amount between (1-5).</p>}
  </form>);
};
export default MealItemForm;