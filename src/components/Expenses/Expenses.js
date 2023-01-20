import { useState } from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const selectDateHandler= (yearSelected) => {
    setFilteredYear(yearSelected)
    console.log(yearSelected)
  }

  const filterExpenses = props.expenses.filter(expense => Number(expense.date.getFullYear()) === Number(filteredYear) )
  

 
  return(

    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onSelectDate={selectDateHandler}/>
    <ExpensesChart expense={filterExpenses}/>
    <ExpensesList filterExpenses={filterExpenses}/>
    </Card>

  )
}

export default Expenses;