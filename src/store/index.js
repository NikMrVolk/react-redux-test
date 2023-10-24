import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import toolkitSlice from './toolkitSlice'

export const store = configureStore({
	reducer: {
		toolkit: toolkitSlice,
	},
	middleware: [thunk],
})
