import { useState } from "react";
import ExpenditureEdit from "./ExpenditureEdit";
import useExpendituresContext from "../hooks/use-expenditures-context";

const ExpenditureItem = ({ expenditure }) => {
  const { deleteExpenditureById } = useExpendituresContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => deleteExpenditureById(expenditure.id);
  const handleEdit = () => setShowEdit(!showEdit);

  return (
    <div>
      {showEdit ? (
        <ExpenditureEdit expenditure={expenditure} onSubmit={handleEdit} />
      ) : (
        <>
          <strong>{expenditure.name}</strong> — ${expenditure.amount}  
          <em> ({expenditure.category})</em>

          <button onClick={handleDelete}>delete</button>
          <button onClick={handleEdit}>edit</button>
        </>
      )}
    </div>
  );
};

export default ExpenditureItem;