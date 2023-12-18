import { useSelector } from "react-redux"

// actions
import { selectPosts } from "./zpostSlice"

// sub-pages
import Post from "./Post"
const PostList = () => {

  // states from slice
  const posts = useSelector(selectPosts)

  return (
    <div className="post-list">
        {
          posts.map(post=>{
            return <Post key={post._id} post={post} />
          })
        }
      </div>
  )
}

export default PostList
