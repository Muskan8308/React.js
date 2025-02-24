import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
    return currPostList;
} 

function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(PostListReducer, DEFAULT_POST_LIST);

  const addPost = () => {};

  const deletePost = (postId) => {
    console.log(postId);
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
}

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Enjoying Vacations ",
    body: "Going on a vacation for 2 weeks. So excited...!!",
    reactions: 2,
    userId: "user@345",
    tags: ["vacation", "enjoy"],
  },
  {
    id: "2",
    title: "Passing Btech",
    body: "4 saal masti krne ke baad bhi pass ho gye bhai..!! Unbelivable ",
    reactions: 20,
    userId: "@user1785",
    tags: ["graduate", "btech", "engineer"],
  },
];

export default PostListProvider;
