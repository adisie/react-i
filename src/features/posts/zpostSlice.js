import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    posts: [],
}

// get all posts
export const getPosts = createAsyncThunk('posts/getPosts',async () => {
    try{
        const response = await axios.get('/api/posts',{withCredentials: true})
        return response.data
    }catch(err){
        return err.response.data
    }
})

// add new post
export const addPost = createAsyncThunk('posts/addPost',async data => {
    try{
        const response = await axios.post('/api/posts',data,{withCredentials: true})
        console.log(response)
        return response.data
    }catch(err){
        return err.response.data
    }
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
           // cases
           // get posts case
           .addCase(getPosts.fulfilled,(state,action)=>{
                if(action.payload.posts){
                    state.posts = [...action.payload.posts]
                }
           })

           // add post
           .addCase(addPost.fulfilled,(state,action)=>{
                if(action.payload.post){
                    state.posts = [action.payload.post,...state.posts]
                }
           })

    }
})

export const selectPosts = state => state.posts.posts


export default postSlice.reducer