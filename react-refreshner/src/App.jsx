import { useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import PostsList from './components/PostsList/PostsList';

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const modalVisibilityHandler = (value) => {
    setModalVisible(value);
  };

  return (
    <>
      <MainHeader onCreatePost={() => modalVisibilityHandler(true)} />
      <main>
        <PostsList
          isPosting={isModalVisible}
          onStopPosting={() => modalVisibilityHandler(false)}
        />
      </main>
    </>
  );
}

export default App;
