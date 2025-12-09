import { useEffect } from "react";
import ExpenditureCreate from "./components/ExpenditureCreate";
import CategoryTotals from "./components/CategoryTotals";
import Dashboard from "./components/Dashboard";
import useExpendituresContext from "./hooks/use-expenditures-context";
import ClearAll from "./components/ClearAll";
import "./App.css";

function App() {
  const { fetchExpenditures } = useExpendituresContext();

  useEffect(() => {
    fetchExpenditures();
  }, [fetchExpenditures]);

  return (
    <div className="app-layout">
      <div className="left-column">
        <Dashboard />
        <ExpenditureCreate />
      </div>

      <div className="right-column">
        <CategoryTotals />
        <ClearAll />
      </div>

    </div>
  );
}

export default App;
