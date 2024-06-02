import classes from './PostsList.module.css';

import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const PostsList = ({ isPosting, onStopPosting }) => {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <>
      {isPosting && (
        <Modal show={isPosting} onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={author} body={body} />
      </ul>
    </>
  );
};

export default PostsList;
