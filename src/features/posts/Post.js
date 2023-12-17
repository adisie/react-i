import { IoMdHeart } from "react-icons/io"
import { BiSolidComment } from "react-icons/bi"
import { MdDelete } from "react-icons/md"

// default user profile
import defaultUserProfileImg from '../../assets/images/default-images/male-profile-2.jpg'


const Post = () => {
  return (
    <div className="post">
        <div className="post-content">
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sint inventore ut labore ullam delectus eaque. Eligendi incidunt eos facilis architecto omnis quidem repellendus, non voluptate quos? Nihil consequatur reiciendis dignissimos deleniti delectus repellendus fugit dolores nobis itaque amet animi atque, ab, similique enim unde doloremque quam. Molestias, ratione nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit magni velit explicabo quisquam assumenda quasi aut porro, corporis officia modi, nisi amet. Minus, quod! Dignissimos doloribus aspernatur ducimus fugiat pariatur veniam!
            </p>
        </div>
        <div className="author-container">
            <div className="user-profile-name">
            <img src={defaultUserProfileImg} alt="post-author-profile"/>
            <span className='author-name'>username</span>
            </div>
            <div className="controller-btns">
            <button><IoMdHeart /></button>
            <button><BiSolidComment /></button>
            <button><MdDelete /></button>
            </div>
            <div className="date-container">
            <span className="date-span">date</span>
            </div>
        </div>
    </div>
  )
}

export default Post
