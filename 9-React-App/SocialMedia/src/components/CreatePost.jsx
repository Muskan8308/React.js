import { useContext, useRef } from "react";
import { PostList } from "../store/post-lists-store";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const userIdEle = useRef();
  const postTitleEle = useRef();
  const postBodyEle = useRef();
  const reactionsEle = useRef();
  const tagsEle = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdEle.current.value;
    const postTitle = postTitleEle.current.value;
    const postBody = postBodyEle.current.value;
    const reactions = reactionsEle.current.value;
    const tags = tagsEle.current.value.split(" ");

    userIdEle.current.value = "";
    postTitleEle.current.value = "";
    postBodyEle.current.value = "";
    reactionsEle.current.value = "";
    tagsEle.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        userId: userId,
        body: postBody,
        tags: tags,
        reactions: reactions,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your userID here
          </label>
          <input
            ref={userIdEle}
            type="text"
            className="form-control"
            id="title"
            placeholder="Your User Id"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={postTitleEle}
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today...?"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyEle}
            type="text"
            className="form-control"
            id="title"
            rows="6"
            placeholder="Tell us more about it..."
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            ref={reactionsEle}
            type="text"
            className="form-control"
            id="title"
            placeholder="Reactions"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            ref={tagsEle}
            type="text"
            className="form-control"
            id="title"
            placeholder="Add your tags"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
