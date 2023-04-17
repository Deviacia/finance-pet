import React from "react";
import { useFinance } from "./hooks/useFinance";

const App = () => {
  const { budget, categories, addMoney, addCategory } = useFinance();

  const budgetHandler = (e) => {
    const money = Number(e.target.value);
    addMoney(money);
  };

  const categoryHandler = (e) => {
    e.preventDefault();

    const category = e.target[0].value;
    const sum = e.target[1].value;
    addCategory(category, sum);
  };

  return (
    <div className="container">
      <div>
        <div>
          <h1>1 step - Set budget</h1>
          <div>
            <span>{budget}</span>
          </div>
          <input onChange={(e) => budgetHandler(e)} type="number" />
        </div>

        <div>
          <h1>2 step - Set categories</h1>
          <form onSubmit={(e) => categoryHandler(e)}>
            <input type="text" />
            <input type="number" />
            <button>Add category</button>
          </form>

          <div>
            {categories.map((category) => (
              <li key={category.id}>{`${category.name}: ${category.sum}`}</li>
            ))}
          </div>
        </div>
        {/* Welcome END */}

        <div>
          <h1>3 step - Add expenses</h1>
          <div>
            <span>{budget}</span>
            <div>Radial chart</div>
          </div>
          <input onChange={(e) => budgetHandler(e)} type="number" />
        </div>
      </div>
    </div>
  );
};

export default App;
