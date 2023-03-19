import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import posts from '../data/posts'
import styles from './singlePost.module.css'

const SinglePost = () => {
  const params = useParams()
  const post = posts.find((post) => post.slug === params.postSlug)
  const navigate = useNavigate()

  useEffect(() => {
    if (!post) {
      navigate('..', { relative: 'path' })
    }
  }, [post, navigate])

  return (
    <div className={styles.post}>
      <h1>{post?.title}</h1>
      <img src={post?.img} alt="random" />
      <p>{post?.text}</p>

      <div className={styles.toBlog}>
        <Link to=".." relative="path">
          --- go to BLOG ---
        </Link>
      </div>
    </div>
  )
}

export default SinglePost
