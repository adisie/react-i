// sub-pages
import PostList from "./PostList"
const Posts = () => {
  return (
    <div className="posts">
      <PostList />
      <div className="add-new-post-form-container">
        <form>
          <textarea name="body"></textarea>
          <button>send</button>
        </form>
      </div>
    </div>
  )
}

export default Posts
