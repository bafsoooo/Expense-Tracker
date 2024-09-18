#!/usr/bin/env node

const _ = require('lodash');
const yargs = require('yargs');
const expense = require('./expense');

const argv = yargs
	.command('addexpns', 'Add a new expense', {
		title: {
			describe: 'Title of expense',
			demandOption: true,
			type: 'string'
		},
        amount: {
			describe: 'amount of expense',
			demandOption: true,
			type: 'number'
		}
	})
	.command('deletexpns', 'Delete an expense', {
        title: {
            describe: 'Title of expense',
            demandOption: true,
            type: 'string'
        }
    })
	.command('updatexpns', 'Update an expense', {
        id: {
            describe: 'ID of expense',
            demandOption: true,
            type: 'number'
        },
        title: {
            describe: 'New title of expense',
            demandOption: true,
            type: 'string'
        }
    })
	.command('viewexpns', 'View all expenses')
    .command('sumexpns', 'View summery of all expenses')
    .command('sumonthexpns', 'View summery of all expenses for a month')
	.help()
	.argv;

const command = argv._[0];

if (command === 'addexpns') { //addExpense
    if(argv.amount<0)
        throw new Error('Amount cannot be negative');
	expense.addExpense(argv.title, argv.amount);
}
if (command === 'deletexpns') { //deleteExpense 
    expense.deleteExpense(argv.title);
    console.log('Expense deleted');

}

