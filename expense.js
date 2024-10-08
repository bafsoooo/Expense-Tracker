const fs = require('fs');
const _ = require('lodash');

const expenseFilePath = 'expense.json';

//Add an expense 
const addExpense = (title,amount) => {
    const expenses = fetchExpenses();
    const id = _.uniqueId(); 
	const createdAt = new Date();
    expenses.push({ id, title ,amount, createdAt});
    saveExpenses(expenses);
    console.log('Expense added:', {id});
};


const deleteExpense = (title) => {
    let expenses = fetchExpenses();
    if (expenses.title ) {}
    let filteredExpense = expenses.filter(
        (expense) => expense.title !== title
    );
    saveExpenses(filteredExpense);
    return expenses.length !== filteredExpense.length;
};

//Fetches all expenses from the file.
const fetchExpenses = () => {
    try {
        const dataBuffer = fs.readFileSync(todosFilePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

//Saves todos to a file.
const saveExpenses = (expenses) => {
    const dataJSON = JSON.stringify(expenses);
    fs.writeFileSync(expenseFilePath, dataJSON);
}

module.exports = { addExpense , deleteExpense ,fetchExpenses, saveExpenses};