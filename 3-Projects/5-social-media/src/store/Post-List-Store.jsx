import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPostList: () => {},
  deletePostList: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPostList = (userId, postTitle, postContent, reactions, tags) => {
    // console.log(`${userId} ${postTitle} ${postContent} ${reactions} ${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postContent,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePostList = (postId) => {
    // console.log(`delete Post called for: ${postId} `);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPostList, deletePostList }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Gujranwala",
    body: "Hi Friends, I am going to Gujranwala for my vacations. Hope to enjoye a lot. peace out",
    reactions: 0,
    userId: "user-9",
    tags: ["Vacations", "Gujranwala", "Enjoying"],
  },
  {
    id: 2,
    title: "Pass ho gia",
    body: "After 4 year of fun finally I have passed the final. Hard to believe",
    reactions: 23,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable", "Fun"],
  },
];
export default PostListProvider;
