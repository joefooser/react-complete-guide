import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import AddPrompt from "./AddPrompt";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const setShowFormHandler = (val) => {
    setShowForm(val);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      { showForm ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onAddExpense={setShowFormHandler} /> 
                 : <AddPrompt onAddExpense={setShowFormHandler} /> }
    </div>
  );
};

export default NewExpense;
