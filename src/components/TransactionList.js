import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

function TransactionList() {
	const { transactions } = useContext(GlobalContext)

	return (
		<>
			<h3>History</h3>
			<ul id="list" className="list">
				{ transactions.map((txn, index) => { return <Transaction transaction={txn} index={index} key={index} /> })}
			</ul>
		</>
	)
}

export default TransactionList
