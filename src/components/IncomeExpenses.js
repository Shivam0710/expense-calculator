import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

function IncomeExpenses() {
	const {transactions} = useContext(GlobalContext)

	const income = transactions.filter(txn => txn.amount > 0).map(i => i.amount).reduce((total, amt) => total + amt, 0).toFixed(2)
	const expense = transactions.filter(txn => txn.amount < 0).map(i => i.amount).reduce((total, amt) => total + amt * (-1), 0).toFixed(2)
	console.log(income);

	return (
		<div className="inc-exp-container">
			<div>
			<h4>Income</h4>
			<p id="money-plus" className="money plus">+${income}</p>
			</div>
			<div>
			<h4>Expense</h4>
			<p id="money-minus" className="money minus">-${expense}</p>
			</div>
		</div>
	)
}

export default IncomeExpenses
