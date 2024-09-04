import Post from "./Post";
import { PostList as PostListData } from "../store/Post-List-Store";
import { useContext } from "react";

const PostList = () => {
  const { postList } = useContext(PostListData);
  // console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
