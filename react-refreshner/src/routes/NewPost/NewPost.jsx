import classes from './NewPost.module.css';
import Modal from '../../components/Modal/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {
  // const [body, setBody] = useState('');
  // const [author, setAuthor] = useState('');
  // const navigate = useNavigate();

  // const bodyChangeHandler = (event) => {
  //   setBody(event.target.value);
  // };

  // const authorChangeHandler = (event) => {
  //   setAuthor(event.target.value);
  // };

  // const closeHandler = () => {
  //   navigate('..');
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const postData = {
  //     body,
  //     author,
  //   };

  // const response = await fetch('http://localhost:8080/posts', {
  //   method: 'POST',
  //   body: JSON.stringify(postData),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // setPosts((prev) => [...prev, { ...postData }]);
  // closeHandler();
  // };

  return (
    <Modal>
      {/* <form className={classes.form} onSubmit={submitHandler}> */}
      <Form className={classes.form} method="POST">
        <p>
          <label htmlFor="body">Text</label>
          {/* <textarea id="body" required rows={3} onChange={bodyChangeHandler} /> */}
          <textarea
            id="body"
            required
            name="body"
            rows={3}
            // onChange={bodyChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            name="author"
            // onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();

  // const body = formData.get('body');
  const postData = Object.fromEntries(formData);

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
