import classes from './PostsList.module.css';

import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const PostsList = () => {
  const posts = useLoaderData();

  // const [posts, setPosts] = useState([]);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   (async function () {
  //     setLoading(true);
  //     const response = await fetch('http://localhost:8080/posts');

  //     const data = await response.json();

  //     setPosts(data.posts);
  //     setLoading(false);
  //   })();
  // }, []);

  return (
    <>
      {posts && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((p, index) => (
            <Post key={p.id} id={p.id} body={p.body} author={p.author} />
          ))}
        </ul>
      )}

      {!posts ||
        (posts.length === 0 && (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        ))}
    </>
  );
};

export default PostsList;
