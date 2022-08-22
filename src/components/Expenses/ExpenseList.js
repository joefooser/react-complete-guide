import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card.js";
import React, { useState } from "react";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [filterYear, setFilterYear] = useState('2022');

  const selectYearHandler = year => {
    setFilterYear(year);
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectYear={selectYearHandler} year={filterYear} ></ExpensesFilter>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default ExpenseList;
