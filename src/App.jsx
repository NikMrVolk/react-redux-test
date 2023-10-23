import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeAllCustomerAction, removeCustomerAction } from './store/customerReducer'
import { addCashAction, getCashAction } from './store/cashReducer'
import './App.css'

function App() {
	const dispatch = useDispatch()
	const cash = useSelector((state) => state.cash.cash)
	const customers = useSelector((state) => state.customers.customers)

	const addCash = (moneyValue) => {
		dispatch(addCashAction(moneyValue))
	}

	const getCash = (moneyValue) => {
		dispatch(getCashAction(moneyValue))
	}

	const addCustomer = (name) => {
		const customer = {
			id: Date.now(),
			name,
		}

		dispatch(addCustomerAction(customer))
	}

	const removeCustomer = (id) => {
		dispatch(removeCustomerAction(id))
	}

	const removeAllCustomers = () => {
		dispatch(removeAllCustomerAction())
	}

	return (
		<div
			className="App"
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '15px',
				height: '100vh',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
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
			<div
				style={{
					display: 'flex',
					gap: '15px',
				}}
			>
				<button
					onClick={() => {
						addCustomer(prompt('Your value'))
					}}
				>
					Добавить клиента
				</button>
				<button onClick={removeAllCustomers}>удалить клиентов</button>
			</div>
			<div>
				{customers?.length ? (
					<>
						{customers.map((customer) => (
							<div
								onClick={() => {
									removeCustomer(customer.id)
								}}
							>
								{customer.name}
							</div>
						))}
					</>
				) : (
					'Клиенты отсутствуют'
				)}
			</div>
		</div>
	)
}

export default App
