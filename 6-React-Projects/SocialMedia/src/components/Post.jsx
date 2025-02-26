import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { PostList } from "../store/post-lists-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdOutlineDelete />
          </span>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
          ))}
          <div className="alert alert-primary reactions" role="alert">
            This post has total {post.reactions} reactions.
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
