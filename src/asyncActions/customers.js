import { getCustomersAction } from '../store/customerReducer'

export const featchCustomers = () => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => dispatch(getCustomersAction(json)))
	}
}
