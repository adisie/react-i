import {configureStore} from '@reduxjs/toolkit'

// reducers
import userReducer from '../features/user/zuserSclice'

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})