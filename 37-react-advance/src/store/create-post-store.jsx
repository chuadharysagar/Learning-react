import { createContext, useReducer } from "react";

// for the default valuesa the context 

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    addInitialPost: () => { },
    deletePost: () => { },

}
);

//  reducer method 
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList]
    }
    else if (action.type === 'ADD_INITIAL_POSTS') {
        newPostList = action.payload.posts;
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    // all the values of the addPost argument are passed from  the  store 
    const addPost = (userId, postTitle, postBody, reactions, tags) => {

        dispatchPostList(
            {
                type: 'ADD_POST',
                payload: {
                    id: Date.now(),
                    title: postTitle,
                    body: postBody,
                    reactions: reactions,
                    UserId: userId,
                    tags: tags,

                }
            }
        )
    }

    const addInitialPost = (posts) => {
        dispatchPostList(
            {
                type: 'ADD_INITIAL_POSTS',
                payload: {
                    posts,
                }
            }
        )
    }


    const deletePost = (postId) => {
        console.log(`post having id ${postId} is deleted`);
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            }
        });
    }
    return (
        <PostList.Provider value={{
            postList,
            addPost,
            addInitialPost,
            deletePost,
        }}>
            {children}
        </PostList.Provider>)
}

export default PostListProvider;
