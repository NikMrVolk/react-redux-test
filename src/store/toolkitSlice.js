import { createSlice } from '@reduxjs/toolkit'
import { getAllUsers } from '../asyncActions/users'

export const toolkitSlice = createSlice({
	name: 'toolkit',
	initialState: {
		users: [],
		loading: false,
		counter: 0,
	},
	reducers: {
		increment(state, action) {
			state.counter += action.payload
		},
		decrement(state, action) {
			state.counter -= action.payload
		},
		addUser(state, action) {
			state.users.push(action.payload)
		},
		deleteUser(state, action) {
			// state.users = state.users.filter((user) => user.id !== action.payload)
			state.users.splice(
				state.users.findIndex((el) => el.id === action.payload),
				1
			)
		},
		deleteLastUser(state) {
			state.users.pop()
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllUsers.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(getAllUsers.fulfilled, (state, action) => {
			state.loading = false
			console.log(action)
			state.users = [...state.users, ...action.payload.comments]
		})
	},
})

export const { increment, decrement, addUser, deleteUser, deleteLastUser } = toolkitSlice.actions

export default toolkitSlice.reducer
