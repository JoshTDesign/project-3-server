const {Expense} = require('../models');

const expenseData =[
    {
        name: 'Spa',
        cost: '25',
        participants: 'Sam,Frodo',
        expenseId: 1,
    },
    {
        name: 'Sake',
        cost: '15',
        participants: 'Luke ,Leia',
        expenseId: 2,
    },
    {
        name: 'Sushi',
        cost: '35',
        participants: 'Soka ,Aang',
        expenseId: 3,
    },
    {
        name: 'Udon',
        cost: '5',
        participants: 'Gojo',
        expenseId: 4,
    },
    
];

const seedExpense = () => Expense.bulkCreate(expenseData);

module.exports = seedExpense;