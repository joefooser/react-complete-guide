import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');

  const selectYearHandler = (year) => {
    setFilterYear(year);
    console.log(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    let year = expense.date.getFullYear().toString();

    // if (filterYear === "ALL") return true;
    // else 
    return year === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={selectYearHandler}
          year={filterYear}
        ></ExpensesFilter>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
