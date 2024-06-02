import classes from './PostsList.module.css';

import NewPost from '../NewPost/NewPost';
import Modal from '../Modal/Modal';
import Post from '../Post/Post';
import { useEffect, useState } from 'react';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      const response = await fetch('http://localhost:8080/posts');

      const data = await response.json();

      setPosts(data.posts);
      setLoading(false);
    })();
  }, []);

  const addPostHandler = async (postData) => {
    const response = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setPosts((prev) => [...prev, { ...postData }]);
  };

  return (
    <>
      {isPosting && (
        <Modal show={isPosting} onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isLoading && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((p, index) => (
            <Post author={p.author} body={p.body} key={index} />
          ))}
        </ul>
      )}

      {!isLoading && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {isLoading && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Loading posts...</h2>
        </div>
      )}
    </>
  );
};

export default PostsList;
