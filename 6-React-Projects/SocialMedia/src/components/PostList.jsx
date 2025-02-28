import Post from "./Post";
import { PostList as PostListData } from "../store/post-lists-store";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";

function PostList() {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}

export default PostList;
