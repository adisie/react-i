import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// local user
const localUser = JSON.parse(localStorage.getItem('user'))

const initialState = {
    isShowLogin: true,
    isFormError: false,
    isLogginLoading: false,
    isLoginSuccessFull: false,
    isLogoutSuccessFull: false,
    user: localUser ? localUser : null,
    errors: null,
}

// login user
export const loginUser = createAsyncThunk('user/loginUser',async data =>{
    try{
        const response = await axios.post('/api/user/login',data,{withCredentials: true})
        return response.data
    }catch(err){
        return err.response.data
    }
})

// logout user
export const logoutUser = createAsyncThunk('user/logoutUser',async () => {
    try{
        const response = await axios.get('/api/user/logout',{withCredentials: true})
        return response.data
    }catch(err){
        return err.response.data
    }
})

// signup user
export const signupUser = createAsyncThunk('user/signupUser',async data => {
    try{
        const response = await axios.post('/api/user/signup',data,{withCredentials: true})
        return response.data
    }catch(err){
        return err.response.data
    }
})


// check token
export const checkToken = createAsyncThunk('user/checkToken',async () => {
    try{
        const response = await axios.get('/api/user/auth-check',{withCredentials: true})
        return response.data
    }catch(err){
        return err.response.data
    }
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSignupToggler: (state,action) => {
            state.isShowLogin = action.payload
        },
        formErrorToggler: (state,action) => {
            state.isFormError = action.payload
        },
        resetErrors: state => {
            state.errors = null
        }
    },
    extraReducers: builder => {
        builder
            // cases
            // login cases
            // pending case
            .addCase(loginUser.pending,state=>{
                state.isLogginLoading = true
            })

            // fulfilled case
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.isLogginLoading = false
                if(action.payload.user){
                    state.user = action.payload.user
                    state.isLoginSuccessFull = true
                    state.isLogoutSuccessFull = false
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors
                }
            })

            // logout cases
            .addCase(logoutUser.fulfilled,(state,action)=>{
                if(action.payload.message){
                    state.user = null
                    state.errors = null
                    state.isLoginSuccessFull = false
                    state.isLogoutSuccessFull = true
                    localStorage.removeItem('user')
                }
            })

            // signup cases
            // pending case
            .addCase(signupUser.pending,state=>{
                state.isLogginLoading = true
            })

            // fulfilled case
            .addCase(signupUser.fulfilled,(state,action)=>{
                state.isLogginLoading = false 
                if(action.payload.user){
                    state.user = action.payload.user 
                    state.isLoginSuccessFull = true
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors
                }
            })


            // token checker 
            // fulfilled case
            .addCase(checkToken.fulfilled,(state,action)=>{
                if(action.payload.error){
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
    }
})

export const selecteIsShowLogin = state => state.user.isShowLogin 
export const selectIsFormError = state => state.user.isFormError 
export const selectUser = state => state.user.user
export const selectErrors = state => state.user.errors
export const selecetIsLoginSuccessFull = state => state.user.isLoginSuccessFull
export const selecetIsLogoutSuccessFull = state => state.user.isLogoutSuccessFull
export const selectIsLoginLoading = state => state.user.isLogginLoading

export const {
    loginSignupToggler,
    formErrorToggler,
    resetErrors,
} = userSlice.actions

export default userSlice.reducer