import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {

  //Add key everytime we map datas to be rendered
  if (props.filterExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.filterExpenses
      .map(expense => {
      return <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      date={expense.date}  
      amount={expense.amount}/>
    })}
    </ul>
  );
}

export default ExpensesList