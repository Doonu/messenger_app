import React from 'react';
import Post from '../../../components/ui/post/ui/Post';
import AllContainer from '../../../components/layouts/all';
import AddPost from '../../../components/forms/addPost';

const Home = () => {
  return (
    <AllContainer>
      <AddPost />
      <Post />
    </AllContainer>
  );
};

export default Home;
