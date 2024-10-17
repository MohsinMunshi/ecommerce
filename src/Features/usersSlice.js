import { createSlice } from '@reduxjs/toolkit'
import userList from "../JSONManager/userList";
export const userSlice = createSlice({
    name: 'counter',
    initialState: {
        userList: userList,
        isLogin:false,
        currentUser:"",
        currentUserId:""
    },
    reducers: {
        login: (state,action) => {
            state.isLogin = true
            state.currentUser = action.payload.name
            state.currentUserId = action.payload.id
        },
        logout: (state) => {
            state.isLogin = false
            state.currentUser = ""
            state.currentUserId = ""
        },
        register: (state,action) => {
            state.userList.push(action.payload)
        },
        updateUser: (state,action) => {
            state.userList = state.userList.map((user) => user.id === action.payload.id ? action.payload : user)
        },
        removeUser: (state,action) => {
            state.userList = state.userList.filter((user) => user.id !== action.payload)
        },
        removeAllUser: (state) => {
            state.userList = []
        }
    }
})

// Action creators are generated for each case reducer function
export const { login,logout,register,updateUser,removeUser,removeAllUser} = userSlice.actions

export default userSlice.reducer