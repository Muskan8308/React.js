import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-lists-store";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, fetching} = useContext(PostListData);
  // const [dataFetched, setDataFetched] = useState(false);
  

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
}

export default PostList;
