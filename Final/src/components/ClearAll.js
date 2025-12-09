import useExpendituresContext from "../hooks/use-expenditures-context";

const ClearAll = () => {
  const { resetAll } = useExpendituresContext();

  return (
    <button
      onClick={resetAll}
      //opted for inline css since it's not too much
      style={{
        background: "#FF4D4D",
        marginTop: "20px",
      }}
    >
      Clear All
    </button>
  );
};

export default ClearAll;