import { useEffect } from "react"
import { useDispatch } from "react-redux"

// actions
import { getPosts } from "./zpostSlice"

// sub-pages
import PostList from "./PostList"
import NewPostForm from "./NewPostForm"

const Posts = () => {

  // disptch
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
  },[])
  return (
    <div className="posts">
      <PostList />
      <NewPostForm />
    </div>
  )
}

export default Posts
