import {formatDistanceToNow} from 'date-fns'
import { useSelector,useDispatch } from 'react-redux'

// actions
import {selectUser} from '../user/zuserSclice'
import {deletePost} from '../posts/zpostSlice'

import { IoMdHeart } from "react-icons/io"
import { BiSolidComment } from "react-icons/bi"
import { MdDelete } from "react-icons/md"

// default user profile
import defaultUserProfileImg from '../../assets/images/default-images/male-profile-2.jpg'


// sub pages
import Author from './Author'


const Post = ({post}) => {
  // states
  const user = useSelector(selectUser)

  // dispatch
  const dispatch = useDispatch()

  return (
    <div className="post">
        <div className="post-content">
            <p>
              {post.body}
            </p>
        </div>
        <div className="author-container">
            <div className="user-profile-name">
            <img src={defaultUserProfileImg} alt="post-author-profile"/>
            <Author _id={post._id}/>
            </div>
            <div className="controller-btns">
            <button><IoMdHeart /></button>
            <button><BiSolidComment /></button>
            {
              user && user._id === post.author 
              ?
              <button onClick={()=>dispatch(deletePost(post._id))}><MdDelete /></button>
              :
              <></>
            }
            </div>
            <div className="date-container">
            <span className="date-span">{formatDistanceToNow(new Date(post.createdAt),{addSuffix: true})}</span>
            </div>
        </div>
    </div>
  )
}

export default Post
