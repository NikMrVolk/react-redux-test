import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
	const dispatch = useDispatch()
	const cash = useSelector((state) => state.cash.cash)

	const addCash = (moneyValue) => {
		dispatch({
			type: 'ADD_CASH',
			payload: moneyValue,
		})
	}

	const getCash = (moneyValue) => {
		dispatch({
			type: 'GET_CASH',
			payload: moneyValue,
		})
	}

	return (
		<div className="App">
			<div
				style={{
					display: 'flex',
					height: '100vh',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '15px',
				}}
			>
				<button
					onClick={() => {
						addCash(+prompt('Your value'))
					}}
				>
					Пополнить счёт
				</button>
				<button
					onClick={() => {
						getCash(+prompt('Your value'))
					}}
				>
					Снять со счёта
				</button>
				{cash}
			</div>
		</div>
	)
}

export default App
