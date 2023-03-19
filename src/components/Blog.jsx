import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import posts from '../data/posts'
import styles from './blog.module.css'
import ScrollTop from './buttons/ScrollTop'
import SnComponent from './SnComponent'

const SORT_KEYS = ['title', 'slug', 'id']

//Sorting the posts 
function sortPosts(posts, key) {
  const sortedPosts = [...posts]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedPosts
  }
  sortedPosts.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedPosts
}

const Blog = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedPosts, setSortedPosts] = useState(sortPosts(posts, sortKey))
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSortedPosts([...posts])
    }
  }, [sortKey, navigate])
  return (
    <div className={styles.blog}>
      <ScrollTop />

      <div className={styles.selector}>
        <h3>Sort posts by:</h3>
        <select
          onChange={(e) => {
            navigate(`?sort=${e.target.value}`)
            setSortKey(e.target.value)
            setSortedPosts(sortPosts(posts, e.target.value))
          }}
        >
          <option />

          {SORT_KEYS.map((e) => (
            <option value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <h2>{sortKey ? `Posts sorted by ${sortKey}` : ''}</h2>

      <div className={styles.posts}>
        {sortedPosts.map((e) => (
          <div
            key={e.id}
            className={styles.post}
            style={{ backgroundImage: `url(${e.img})` }}
          >
            <Link to={e.slug} className="postLink">
              {e.title}
            </Link>
          </div>
        ))}
      </div>

      <SnComponent />
    </div>
  )
}

export default Blog
