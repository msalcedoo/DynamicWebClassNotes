import { useEffect, useRef, useState } from "react";
import useExpendituresContext from "../hooks/use-expenditures-context";
import gsap from "gsap";

const Dashboard = () => {
  const { expenditures } = useExpendituresContext();
  const total = expenditures.reduce((sum, i) => sum + i.amount, 0);

  const [displayValue, setDisplayValue] = useState(total);
  const animValue = useRef({ number: 0 });

  useEffect(() => {
    gsap.to(animValue.current, {
      number: total,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        setDisplayValue(animValue.current.number);
      }
    });
  }, [total]);

  return (
    <div>
      <div className="total-number">${displayValue.toFixed(2)}</div>
      <div className="total-label">Money Spent This Month</div>
    </div>
  );
};

export default Dashboard;