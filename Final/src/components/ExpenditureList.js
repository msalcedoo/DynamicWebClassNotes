import useExpendituresContext from "../hooks/use-expenditures-context";
import ExpenditureItem from "./ExpenditureItem";

const ExpenditureList = () => {
  const { expenditures } = useExpendituresContext();

  return (
    <div>
      {expenditures.map((e) => (
        <ExpenditureItem key={e.id} expenditure={e} />
      ))}
    </div>
  );
};

export default ExpenditureList;
