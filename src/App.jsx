import React, { useState } from "react";
import { useFinance } from "./hooks/useFinance";

const App = () => {
  const { wallet, categories, addMoney, addCategory } = useFinance();
  const [balance, setBalance] = useState(0);
  const [cat, setCat] = useState("");

  const balanceHandler = (e) => {
    e.preventDefault();
    addMoney(balance);
  };

  const categoryHandler = (e) => {
    e.preventDefault();

    addCategory(cat);
  };

  return (
    <div className="container">
      <div>
        <div>
          <h1>1 step</h1>
          <span>{wallet}</span>
          <form onSubmit={(e) => balanceHandler(e)}>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
            <button>Add money</button>
          </form>
        </div>

        <div>
          <h1>2 step</h1>
          <form onSubmit={(e) => categoryHandler(e)}>
            <input
              type="text"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            />
            <button>Add category</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
