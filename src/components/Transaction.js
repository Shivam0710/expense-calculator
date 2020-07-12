import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

function Transaction({ transaction }) {
	let isIncome = transaction.amount > 0 ? true : false
	let { deleteTransaction } = useContext(GlobalContext)

	let removeItem = () => {
		deleteTransaction(transaction.id)
	}

	return (
		<>
			<li className={isIncome ? 'plus' : 'minus'}>
				{transaction.text}
				<span>{isIncome ? "+" : ""}{transaction.amount}</span>
				<button className="delete-btn" onClick={removeItem} >x</button>
			</li>
		</>
	)
}

export default Transaction