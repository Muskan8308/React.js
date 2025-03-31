import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-lists-store";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

function PostList() {
  // const { postList, fetching } = useContext(PostListData);
  // const [dataFetched, setDataFetched] = useState(false);

  const postList = useLoaderData(); // Get the fetched data from loader function

  return (
    <>
      {/*
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && c
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
      */}

      {/* For routing and loader purpose */}
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}

// Define the loader function for fetching data
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
