import { useState } from "react";
import useExpendituresContext from "../hooks/use-expenditures-context";

const ExpenditureEdit = ({ expenditure, onSubmit }) => {
  const { editExpenditureById } = useExpendituresContext();

  const [name, setName] = useState(expenditure.name);
  const [amount, setAmount] = useState(expenditure.amount);
  const [category, setCategory] = useState(expenditure.category);

  const handleSubmit = (e) => {
    e.preventDefault();

    editExpenditureById(expenditure.id, {
      name,
      amount: parseFloat(amount),
      category,
    });

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Edit Transaction:</label>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Bills</option>
        <option>Groceries</option>
        <option>Subscriptions</option>
      </select>
    </form>
  );
};

export default ExpenditureEdit;
