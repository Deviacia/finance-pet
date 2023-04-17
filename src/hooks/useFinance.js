import { useState } from "react";

export const useFinance = () => {
    const [budget, setBudget] = useState(0);
    const [categories, setCategories] = useState([{ id: 1, name: 'Common', sum: 0 }]);

    const addMoney = (value) => {
        setBudget(value)
    }

    // FIX IT: Placeholder sum = 0 if sum = null doesn't work
    const addCategory = (name, sum = 0) => {
        const category = {
            id: categories.length + 1,
            name,
            sum
        }

        setCategories([...categories, category])
    }

    return { budget, categories, addMoney, addCategory }
};