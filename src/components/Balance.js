import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
	const { transactions } = useContext(GlobalContext)
	const balance = transactions.map(txn => txn.amount).reduce((total, amt) => total + amt, 0).toFixed(2)

	return (
		<>
			<h4>Your Balance</h4>
			<h1 id="balance">${balance}</h1>
		</>
	)
}

export default Balance