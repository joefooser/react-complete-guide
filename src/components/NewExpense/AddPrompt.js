import React from "react";
import "./NewExpense.css";

const AddPrompt = (props) => {
  const addClickedHandler = (event) => {
    props.onAddExpense(true);
  }
      
  return (
    <div >
      <button onClick={addClickedHandler}>Add New Expense</button>
    </div>
  );
};

export default AddPrompt;


//onAddExpense