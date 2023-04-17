import { useState } from "react";

export const useFinance = () => {
    const [wallet, setWallet] = useState(0);
    const [categories, setCategories] = useState([{ name: 'Common', sum: 0 }]);

    const addMoney = (value) => {
        setWallet(value)
    }

    const addCategory = (name) => {
        setCategories([...categories, { name: name, sum: 0 }])
    }

    console.log(categories);

    return { wallet, categories, addMoney, addCategory }
};