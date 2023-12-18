import {configureStore} from '@reduxjs/toolkit'

// reducers
import userReducer from '../features/user/zuserSclice'
import postReducer from '../features/posts/zpostSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postReducer,
    }
})