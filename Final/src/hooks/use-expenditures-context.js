import { useContext } from "react";
import ExpendituresContext from "../context/expenditures";

function useExpendituresContext() {
  return useContext(ExpendituresContext);
}

export default useExpendituresContext;
