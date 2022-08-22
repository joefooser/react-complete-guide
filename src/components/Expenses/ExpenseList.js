import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card.js";
import React, { useState } from "react";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const selectYearHandler = (year) => {
    setFilterYear(year);
    console.log(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    let year = expense.date.getFullYear().toString();

    if (filterYear === "ALL") return true;
    else return year === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={selectYearHandler}
          year={filterYear}
        ></ExpensesFilter>
        {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }
      </Card>
    </div>
  );
};

export default ExpenseList;
