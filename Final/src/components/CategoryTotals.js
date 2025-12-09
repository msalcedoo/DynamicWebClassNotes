import { useEffect, useRef, useState } from "react";
import useExpendituresContext from "../hooks/use-expenditures-context";
import gsap from "gsap";

const CategoryTotals = () => {
  const { expenditures } = useExpendituresContext();

  const categories = ["Bills", "Groceries", "Subscriptions"];

  const totals = categories.map(category =>
    expenditures
      .filter(item => item.category === category)
      .reduce((sum, i) => sum + i.amount, 0)
  );

  const valueRefs = useRef(totals.map(() => ({ number: 0 })));
  const [displayValues, setDisplayValues] = useState(totals);

  useEffect(() => {
    totals.forEach((total, i) => {
      gsap.to(valueRefs.current[i], {
        number: total,
        duration: 1,
        ease: "power2.out",
        onUpdate: () => {
          setDisplayValues(prev => {
            const updated = [...prev];
            updated[i] = valueRefs.current[i].number;
            return updated;
          });
        }
      });
    });
  }, [totals]);

  return (
    <div className="category-container">
      {categories.map((name, i) => (
        <div key={name} className="category-box">
          <strong>{name}</strong>
          <div>${displayValues[i].toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryTotals;