const defaultState = {
	customers: [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const REMOVE_ALL_CUSTOMERS = 'REMOVE_ALL_CUSTOMERS'

export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
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

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload })
export const removeAllCustomerAction = (payload) => ({ type: REMOVE_ALL_CUSTOMERS, payload })
