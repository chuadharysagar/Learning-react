import { createContext, useReducer } from "react";

// for the default valuesa the context 

export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletePost : ()=>{},
}
);

//  reducer method 
const postListReducer = (currPostList , action )=>{
     let newPostList = currPostList;
     if(action.type==='DELETE_POST'){
        newPostList = currPostList.filter((post)=> post.id !== action.payload.postId);
     }
     else if(action.type==='ADD_POST'){
        newPostList = [action.payload ,...currPostList]
     }
     return newPostList;
}

const PostListProvider=({children})=>{
   const [postList , dispatchPostList] = useReducer(postListReducer ,DEFAULT_POST_LIST);
 
   // all the values of the addPost argument are passed from  the  store 
   const addPost=(userId , postTitle , postBody , reactions , tags)=>{
         
    dispatchPostList(
        {
        type:'ADD_POST',
        payload:{
            id:Date.now(),
            title :postTitle,
            body:postBody,
            reactions:reactions,
            UserId:userId,
            tags:tags,

        }
        }
    )
   }
   

   const deletePost=(postId)=>{
       console.log(`post having id ${postId} is deleted`);
       dispatchPostList({
        type:'DELETE_POST',
        payload:{
            postId,
        }
       });
   }
    return(
    <PostList.Provider value={{
        postList,
        addPost,
        deletePost,
    }}>
        {children}
    </PostList.Provider>)
}


const DEFAULT_POST_LIST =[
    {
        id:'1',
        title :'Going to mumbai',
        body:'hi friends  i am going to mumbai for vacation',
        reactions:2,
        UserId:'user-9',
        tags:["Vacation","Mumbai","Enjoy"]
    },

    {
        id:'2',
        title :'Pass hogaye Bhai',
        body:'char saal k masti k baad v hogaye pass Hard to believe !!...',
        reactions:17,
        UserId:'user-6',
        tags:["Graduating","Unbelievable"]
    }
]


export default PostListProvider;
