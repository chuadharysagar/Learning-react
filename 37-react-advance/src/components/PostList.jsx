import Post from "./Post"
import { PostList as PostListData } from "../store/create-post-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
   const { postList, addInitialPost } = useContext(PostListData);
   const [fethiongAPI, setFetchingAPI] = useState(false);
   const controller = new AbortController();
   const signal  = controller.signal;
   useEffect(() => {

      setFetchingAPI(true);
      fetch('https://dummyjson.com/posts',{signal})
         .then((res) => res.json())
         .then((data) => {
            addInitialPost(data.posts);
            setFetchingAPI(false);

         });

         return ()=>{
            console.log("UseEffect Cleanup method running !!...");
            controller.abort();
         };
   }, [])




   const handleGetPostClick = () => {
      console.log("get post from api is clicked");

   }


   return <>
      {fethiongAPI && <LoadingSpinner />}
      {!fethiongAPI && postList.length === 0 && <WelcomeMessage onGetPostClick={handleGetPostClick} />}
      {!fethiongAPI && postList.map((post) =>
         (<Post key={post.id} post={post} />))}
   </>
}


export default PostList;