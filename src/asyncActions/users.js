import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAllUsers = createAsyncThunk('toolkit/getAllUsers', async () => {
	const response = await fetch('https://wedev-api.sky.pro/api/v2/:sfasfsa/comments')
	const data = await response.json()
	console.log(data)
	return data
})
