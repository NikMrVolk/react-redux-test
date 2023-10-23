import { configureStore } from '@reduxjs/toolkit'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'

export const store = configureStore({
	reducer: {
		cash: cashReducer,
		customers: customerReducer,
	},
})
