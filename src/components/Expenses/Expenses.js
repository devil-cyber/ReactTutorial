import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import React from "react";
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((item, i) => {
        return (
          <ExpenseItem
            key={i}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
