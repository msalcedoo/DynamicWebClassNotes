import { createContext, useState, useCallback } from "react";
import axios from "axios";

// Create the context
const ExpendituresContext = createContext();

const Provider = ({ children }) => {
  const [expenditures, setExpenditures] = useState([]);

  // Load data from JSON Server
  const fetchExpenditures = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/expenditures");
    setExpenditures(response.data);
  }, []);

  // CREATE
  const createExpenditure = async (data) => {
    const response = await axios.post(
      "http://localhost:3001/expenditures",
      data
    );

    setExpenditures([...expenditures, response.data]);
  };

  // DELETE
  const deleteExpenditureById = async (id) => {
    await axios.delete(`http://localhost:3001/expenditures/${id}`);

    const updated = expenditures.filter((item) => item.id !== id);
    setExpenditures(updated);
  };

  // UPDATE (PUT/PATCH)
  const editExpenditureById = async (id, updatedFields) => {
    const response = await axios.put(
      `http://localhost:3001/expenditures/${id}`,
      updatedFields
    );

    const updated = expenditures.map((item) => {
      if (item.id === id) {
        return { ...item, ...response.data };
      }
      return item;
    });

    setExpenditures(updated);
  };

  const resetAll = async () => {
    for (let exp of expenditures) {
      await axios.delete(`http://localhost:3001/expenditures/${exp.id}`);
    }

  // clear state in React
  setExpenditures([]);
  };
  // Everything exposed to components
  const valuesToShare = {
    expenditures,
    fetchExpenditures,
    createExpenditure,
    deleteExpenditureById,
    editExpenditureById,
    resetAll
  };

  return (
    <ExpendituresContext.Provider value={valuesToShare}>
      {children}
    </ExpendituresContext.Provider>
  );
};

export { Provider };
export default ExpendituresContext;
