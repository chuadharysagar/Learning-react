import { useContext, useRef } from "react";
import { PostList } from "../store/create-post-store";

const CreatePost = () => {
  const {addPost}= useContext(PostList);

   const userIdElement = useRef();
   const posttitleElement = useRef();
   const postbodyElement= useRef();
   const rectionsElement = useRef();
   const tagsElement = useRef();


   const handleOnSubmit =(event)=>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = posttitleElement.current.value;
    const postBody = postbodyElement.current.value;
    const reactions = rectionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    // pass all the values as a argumnet in add post method to progress add post meth 
    addPost(userId , postTitle , postBody , reactions , tags);

    userIdElement.current.value="";
    posttitleElement.current.value="";
    postbodyElement.current.value="";
    rectionsElement.current.value="";
    tagsElement.current.value=" ";

   }
   
    return <>
        <form className="create-post" onSubmit={handleOnSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User ID</label>
                <input ref={userIdElement} type="text" className="form-control" id="UserID" placeholder="Enter your user id here..." />

            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input ref={posttitleElement} type="text" className="form-control" id="title" placeholder="How are you feeling today..." />

            </div>

            <div className="mb-3">
                <label htmlFor="postContent" className="form-label">Post Content</label>
                <textarea ref={postbodyElement} rows={4} type="text" className="form-control" id="post-content" placeholder="Tell us more about it..." />

            </div>
            <div className="mb-3">
                <label htmlFor="reaction" className="form-label">Number of reactions</label>
                <input ref={rectionsElement} type="text" className="form-control" id="reactions" placeholder="How may people reacted to this post" />
    
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
                <input ref={tagsElement} type="text" className="form-control" id="tags" placeholder="Please enter your tags using space" />
    
            </div>

            <button type="submit" className="btn btn-primary">Post</button>
        </form>

    </>
}


export default CreatePost;