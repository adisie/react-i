import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isShowLogin: true,
    isFormError: false,
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSignupToggler: state => {
            state.isShowLogin = !state.isShowLogin
        },
        formErrorToggler: (state,action) => {
            state.isFormError = action.payload
        }
    }
})

export const selecteIsShowLogin = state => state.user.isShowLogin 
export const selectIsFormError = state => state.user.isFormError 
export const selectUser = state => state.user.user

export const {
    loginSignupToggler,
    formErrorToggler,
} = userSlice.actions

export default userSlice.reducer