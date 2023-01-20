import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [show, setShow] = useState(true)
  
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    setShow(false)
    props.onAddExpense(expenseData)
  }

  const clickShowHandler = () => {
    setShow(show === true ? false : true)
  }

  return (
    <div className="new-expense">
      {!show && 
      <div>
        <button onClick={clickShowHandler}>Add New Expense</button>
      </div>
      }
      
      {
      show &&
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} showHandler={clickShowHandler}/>
      }
    </div>
  )
}

export default NewExpense