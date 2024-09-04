import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-List-Store";
// import PostList from "../store/Post-List-Store";
const Post = ({ post }) => {
  const { deletePostList } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          {post.body}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePostList(post.id)}
          >
            <MdDelete />
          </span>
        </p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge rounded-pill text-bg-info hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post is reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};
export default Post;
