import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './routes/App.jsx';
import CreatePost, { cretePostAction } from './components/CreatePost.jsx';
import PostList, { postLoader } from './components/PostList.jsx';
import Errorpage from './components/EroorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement:<Errorpage/>,
    children: [{ path: "/", element: <PostList /> , loader : postLoader },
    { path: "/create-post", element: <CreatePost/>,action:cretePostAction}]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
