import { useState } from "react";
import useExpendituresContext from "../hooks/use-expenditures-context";

const ExpenditureCreate = () => {
  const { createExpenditure } = useExpendituresContext();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Bills");

  const handleSubmit = (e) => {
    e.preventDefault();

    createExpenditure({
      name,
      amount: parseFloat(amount),
      category,
    });

    setName("");
    setAmount("");
    setCategory("Bills");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Transaction name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Bills</option>
        <option>Groceries</option>
        <option>Subscriptions</option>
      </select>

      <button type="submit">Confirm</button>
    </form>
  );
};

export default ExpenditureCreate;
