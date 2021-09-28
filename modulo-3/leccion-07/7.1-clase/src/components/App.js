import { useState } from 'react';
import Header from './Header';
import PostList from './PostsList';
import data from '../data/data.json';
import '../stylesheet/index.scss';

const App = () => {
  const [posts] = useState(data);

  return (
    <div>
      <Header title="Las maravillas del mundo" />
      <main>
        <PostList postsList={posts} />
      </main>
    </div>
  );
};

export default App;
