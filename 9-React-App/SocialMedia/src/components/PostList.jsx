import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-lists-store";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  // const [dataFetched, setDataFetched] = useState(false);
  const [fetching, setFetching] = useState(false);

 /* useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signals = controller.signal;

    fetch("https://dummyjson.com/posts", {signals})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

      // cleanup method
    return () => {
      console.log("Cleaning up code");
      controller.abort();
    };
  }, []);
*/
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
