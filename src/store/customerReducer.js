const defaultState = {
	customers: [],
}

const GET_CUSTOMERS = 'GET_CUSTOMERS'
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const REMOVE_ALL_CUSTOMERS = 'REMOVE_ALL_CUSTOMERS'

export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_CUSTOMERS:
			return { ...state, customers: [...state.customers, ...action.payload] }
		case ADD_CUSTOMER:
			return { ...state, customers: [...state.customers, action.payload] }
		case REMOVE_CUSTOMER:
			return {
				...state,
				customers: state.customers.filter((el) => el.id !== action.payload),
			}
		case REMOVE_ALL_CUSTOMERS:
			return {
				...state,
				customers: [],
			}
		default:
			return state
	}
}

export const getCustomersAction = (payload) => ({ type: GET_CUSTOMERS, payload })
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })
export const removeAllCustomerAction = (payload) => ({ type: REMOVE_ALL_CUSTOMERS, payload })
