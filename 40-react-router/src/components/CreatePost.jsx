import { useContext, useRef } from "react";
import { PostList } from "../store/create-post-store";
import { redirect, useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";

const CreatePost = () => {
//   const {addPost}= useContext(PostList);
//   const navigate = useNavigate();
//    const userIdElement = useRef();
//    const posttitleElement = useRef();
//    const postbodyElement= useRef();
//    const rectionsElement = useRef();
//    const tagsElement = useRef();


//    const handleOnSubmit =(event)=>{
//     event.preventDefault();
//     const userId = userIdElement.current.value;
//     const postTitle = posttitleElement.current.value;
//     const postBody = postbodyElement.current.value;
//     const reactions = rectionsElement.current.value;
//     const tags = tagsElement.current.value.split(" ");

//     // pass all the values as a argumnet in add post method to progress add post meth 

//     userIdElement.current.value="";
//     posttitleElement.current.value="";
//     postbodyElement.current.value="";
//     rectionsElement.current.value="";
//     tagsElement.current.value=" ";

    // Sending deta to the server for the storing the data 
    
// fetch('https://dummyjson.com/posts/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: postTitle,
//         body: postBody,
//         reactions: reactions,
//         userId: userId,
//         tags: tags,

//     })
//   })
//   .then((res) => res.json())
//   .then((post)=> {addPost(post);
//     navigate("/");    
//    } );            

//    }
   
    return <>
        <Form method="POST" className="create-post">
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User ID</label>
                <input name="userId" type="text" className="form-control" id="UserID" placeholder="Enter your user id here..." />

            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input name="title" type="text" className="form-control" id="title" placeholder="How are you feeling today..." />

            </div>

            <div className="mb-3">
                <label htmlFor="postContent" className="form-label">Post Content</label>
                <textarea name="body" rows={4} type="text" className="form-control" id="post-content" placeholder="Tell us more about it..." />

            </div>
            <div className="mb-3">
                <label htmlFor="reaction" className="form-label">Number of reactions</label>
                <input name="reactions" type="text" className="form-control" id="reactions" placeholder="How may people reacted to this post" />
    
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
                <input name="tags" type="text" className="form-control" id="tags" placeholder="Please enter your tags using space" />
    
            </div>

            <button type="submit" className="btn btn-primary">Post</button>
        </Form>

    </>
}

export async function cretePostAction(data){
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");
    console.log(postData);

    fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(postData),
  })
  .then((res) => res.json())
  .then((post)=> {
    console.log(post); 
   } );       
     return redirect("/");
    
}


export default CreatePost;