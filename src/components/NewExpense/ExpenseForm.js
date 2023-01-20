import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [state, setState] = useState({
    title: "",
    amount: "",
    date: "",
  });
  

  const titleChangeHandler = (event) => {
    setState(
   {...state, title: event.target.value}
    )
  };

  const amountChangeHandler = (event) => {
    setState({...state, amount: Number(event.target.value)}
    )
  };

  const dateChangeHandler = (event) => {
    setState(
    {...state, date: event.target.value}
    )
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: state.title,
      amount: +state.amount,
      date: new Date(state.date),
    }
 
    props.onSaveExpenseData(expenseData)
    
    setState({
      title: "",
      amount: "",
      date: "",
    })
  };

  return(
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={state.title} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={state.amount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={state.date} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense_actions'>
        <button onClick={props.showHandler}>Cancel</button>
        <button type='submit' >Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm