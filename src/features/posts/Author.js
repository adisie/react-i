import { useSelector } from 'react-redux'
import {selectAuthors} from './zpostSlice'
import {selectUser} from '../user/zuserSclice'

const Author = ({_id}) => {
    // authors
    const user = useSelector(selectUser)
    const authors = useSelector(selectAuthors)
    let author = authors.find(author=>author._id === _id)
  return (
    <span className='author-name'>{author?.username}</span>
  )
}

export default Author
