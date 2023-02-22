import s from "./style.module.css";
import { useSelector } from "react-redux";

export function ExpenseTotal(props) {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector((store) => store.EXPENSE.income);

  const totalExpense = expenseList.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);

  const remainingMoney = income - totalExpense;
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Dépenses Total</div>
        <div className={`col ${s.amount}`}>{totalExpense} €</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Argent restant</div>
        <div className={`col ${s.amount}`}>{remainingMoney} €</div>
      </div>
    </div>
  );
}
