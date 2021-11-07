import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const getYear = (date) => {
    return date.getFullYear();
  };
  const getFilterYearHandler = (year) => {
    setFilterYear(year);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter onGetFilterYear={getFilterYearHandler} />
      {props.expenses
        .filter((item) => getYear(item.date).toString() === filterYear)
        .map((item, i) => {
          console.log(item);
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
