import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { PostList as PostListData } from "../store/post-lists-store";
import { useContext } from "react";
function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);

  function handleGetPostClick() {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {addInitialPosts(data.posts)});
  }
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage OnGetPostsClick={handleGetPostClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}

export default PostList;
