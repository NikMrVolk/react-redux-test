import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, addUser, deleteLastUser, deleteUser } from './store/toolkitSlice'
import { getAllUsers } from './asyncActions/users'
import './App.css'
import { useEffect } from 'react'

function App() {
	const dispatch = useDispatch()

	const { users, counter, loading } = useSelector((state) => state.toolkit)

	const addCash = (moneyValue) => {
		dispatch(increment(moneyValue))
	}

	const getCash = (moneyValue) => {
		dispatch(decrement(moneyValue))
	}

	const getCustomers = () => {}

	const addCustomer = (text) => {
		const customer = {
			id: Date.now(),
			text,
		}
		dispatch(addUser(customer))
	}

	const removeCustomer = (id) => {
		dispatch(deleteUser(id))
	}

	const removeLastCustomer = () => {
		dispatch(deleteLastUser())
	}

	useEffect(() => {
		dispatch(getAllUsers())
	}, [])

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
				{counter}
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
				<button onClick={getCustomers}>Получить клиентов из базы</button>
				<button onClick={removeLastCustomer}>удалить последнего клиента</button>
			</div>
			<div>
				{!!users.lenght && 'Пользователей нет'}
				{loading ? (
					'Загрузка...'
				) : (
					<>
						{users.map((user) => (
							<div
								onClick={() => {
									removeCustomer(user.id)
								}}
							>
								{user.text}
							</div>
						))}
					</>
				)}
			</div>
		</div>
	)
}

export default App
