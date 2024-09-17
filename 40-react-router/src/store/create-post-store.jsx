import { createContext, useReducer, useState, useEffect } from "react";

// for the default valuesa the context 

export const PostList = createContext({
    postList: [],
    fethiongAPI: false,
    addPost: () => { },
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
    const [fethiongAPI, setFetchingAPI] = useState(false);

    // all the values of the addPost argument are passed from  the  store 
    const addPost = (post) => {

        dispatchPostList(
            {
                type: 'ADD_POST',
                payload: post,
            }
        );
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




    // useEffect(() => {
    //     setFetchingAPI(true);
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     fetch('https://dummyjson.com/posts', { signal })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             addInitialPost(data.posts);
    //             setFetchingAPI(false);

    //         });

    //     return () => {
    //         console.log("UseEffect Cleanup method running !!...");
    //         controller.abort();
    //     };
    // }, [])


    return (
        <PostList.Provider value={{
            postList,
            fethiongAPI,
            addPost,
            deletePost,
        }}>
            {children}
        </PostList.Provider>)
}

export default PostListProvider;
