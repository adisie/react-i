import {formatDistanceToNow} from 'date-fns'

import { IoMdHeart } from "react-icons/io"
import { BiSolidComment } from "react-icons/bi"
import { MdDelete } from "react-icons/md"

// default user profile
import defaultUserProfileImg from '../../assets/images/default-images/male-profile-2.jpg'


const Post = ({post}) => {
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
            <span className='author-name'>{post.author}</span>
            </div>
            <div className="controller-btns">
            <button><IoMdHeart /></button>
            <button><BiSolidComment /></button>
            <button><MdDelete /></button>
            </div>
            <div className="date-container">
            <span className="date-span">{formatDistanceToNow(new Date(post.createdAt),{addSuffix: true})}</span>
            </div>
        </div>
    </div>
  )
}

export default Post
