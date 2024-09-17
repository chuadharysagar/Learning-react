import Post from "./Post"
import { PostList as PostListData } from "../store/create-post-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
   // const { postList ,fethiongAPI} = useContext(PostListData);
   
   const postList = useLoaderData();


   const handleGetPostClick = () => {
      console.log("get post from api is clicked");

   }


   return <>
      {/* {fethiongAPI && <LoadingSpinner />} */}
      {/*!fethiongAPI && */postList.length === 0 && <WelcomeMessage onGetPostClick={handleGetPostClick} />}
      {/*!fethiongAPI && */postList.map((post) =>
         (<Post key={post.id} post={post} />))}
   </>
}


export const postLoader=()=>{
   return fetch('https://dummyjson.com/posts')
   .then((res) => res.json())
   .then((data) => {
       return data.posts
   });
}


export default PostList;