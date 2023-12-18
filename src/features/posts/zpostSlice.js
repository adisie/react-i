import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    posts: [],
    authors: [],
}

// get authors
export const getAuthors = createAsyncThunk('posts/getAuthors',async ()=>{
    try{
        const response = await axios.get('/api/posts/authors',{withCredentials: true})
        return response.data
    }catch(err){
        return err.response.data
    }
})
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
        return response.data
    }catch(err){
        return err.response.data
    }
})

// delete post
export const deletePost = createAsyncThunk('posts/deletePost',async data => {
    try{
        const response = await axios.delete(`/api/posts/${data}`,{withCredentials: true})
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
           // get authors
           .addCase(getAuthors.fulfilled,(state,action)=>{
                if(action.payload.authors){
                    state.authors = [...action.payload.authors]
                }
           })
           // get posts case
           .addCase(getPosts.fulfilled,(state,action)=>{
                if(action.payload.posts){
                    state.posts = [...action.payload.posts]
                }
           })

           // add post
           .addCase(addPost.fulfilled,(state,action)=>{
                if(action.payload.post){
                    getAuthors()
                    state.posts = [action.payload.post,...state.posts]
                }
           })

           // delete posts
           .addCase(deletePost.fulfilled,(state,action)=>{
                if(action.payload._id){
                    state.posts = state.posts.filter(post=>post._id !== action.payload._id)
                }
           })

    }
})

export const selectAuthors = state => state.posts.authors
export const selectPosts = state => state.posts.posts


export default postSlice.reducer