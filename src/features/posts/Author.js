import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getAuthors,selectAuthors} from './zpostSlice'

const Author = ({_id}) => {
    // authors
    const authors = useSelector(selectAuthors)
    let author = authors.find(author=>author._id === _id)

    // dispatch
    const dispatch = useDispatch()

    // effects
    useEffect(()=>{
      dispatch(getAuthors())
    },[])

  return (
    <span className='author-name'>{author?.username}</span>
  )
}

export default Author
