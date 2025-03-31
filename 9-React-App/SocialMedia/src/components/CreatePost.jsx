import { useContext, useRef } from "react";
import { PostList } from "../store/post-lists-store";
import { useNavigate } from "react-router-dom";
import { Form, redirect } from "react-router-dom";

function CreatePost() {
  /*
  const { addPost } = useContext(PostList);
  const userIdEle = useRef();
  const postTitleEle = useRef();
  const postBodyEle = useRef();
  const reactionsEle = useRef();
  const tagsEle = useRef();
  const navigate = useNavigate()

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

    // We will move this code of block (fetch) in the action function
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
        navigate("/")
      });
  };
*/

  return (
    <>
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your userID here
          </label>
          <input
            // ref={userIdEle}
            name="userId"
            type="text"
            className="form-control"
            id="userId"
            placeholder="Your User Id"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            // ref={postTitleEle}
            name="title"
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
            // ref={postBodyEle}
            name="body"
            type="text"
            className="form-control"
            id="body"
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
            // ref={reactionsEle}
            name="reactions"
            type="text"
            className="form-control"
            id="reactions"
            placeholder="Reactions"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            // ref={tagsEle}
            name="tags"
            type="text"
            className="form-control"
            id="tags"
            placeholder="Add your tags"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
}

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  
/*
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
      navigate("/");
    });
*/
// There is no need of writing the fetch block, here its all get done automatically.

  return redirect("/");
}

export default CreatePost;
