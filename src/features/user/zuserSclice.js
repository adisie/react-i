import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isShowLogin: true,
    isFormError: false,
    user: null,
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
                console.log('PENDING')
            })

            // fulfilled case
            .addCase(loginUser.fulfilled,(state,action)=>{
                if(action.payload.user){
                    console.log("FULFILLED")
                    state.user = action.payload.user
                }
                if(action.payload.errors){
                    console.log('ERROR')
                    state.errors = action.payload.errors
                }
            })
    }
})

export const selecteIsShowLogin = state => state.user.isShowLogin 
export const selectIsFormError = state => state.user.isFormError 
export const selectUser = state => state.user.user
export const selectErrors = state => state.user.errors

export const {
    loginSignupToggler,
    formErrorToggler,
    resetErrors,
} = userSlice.actions

export default userSlice.reducer