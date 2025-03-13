import { createContext, useEffect, useCallback, useReducer, useMemo, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching : false,
  // addInitialPosts: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signals = controller.signal;

    fetch("https://dummyjson.com/posts", { signals })
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

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  // Advanced hook - useCallback hook helps to avoid repainting of child if changes occurs on parent component.
  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        fetching : fetching,
        // addInitialPosts: addInitialPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
}

/*
Using useMemo hook similar to useCallback (for memiozed functions), for memiozed values .

  let arr = [5, 7, 9, 3, 2, 2, 6, 2];
  let sortedArray = useMemo(() => arr.sort(), [arr]);
*/

/*
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
*/

export default PostListProvider;
