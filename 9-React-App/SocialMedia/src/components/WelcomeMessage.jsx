function WelcomeMessage({OnGetPostsClick}) {
  return (
    <center>
      <h2 className="welcome">There is no post yet...</h2>
      <button
        type="button"
        onClick={OnGetPostsClick}
        className="btn btn-primary"
      >
        Create Post
      </button>
    </center>
  );
}

export default WelcomeMessage;
