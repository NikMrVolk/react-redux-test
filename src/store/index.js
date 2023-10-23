import { configureStore } from '@reduxjs/toolkit'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'
import thunk from 'redux-thunk'

export const store = configureStore({
	reducer: {
		cash: cashReducer,
		customers: customerReducer,
	},
	middleware: [thunk],
})
