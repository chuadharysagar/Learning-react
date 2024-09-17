
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/SideBar'
import CreatePost from '../components/CreatePost'
import PostList from '../components/PostList'
import { useState } from 'react'
import PostListProvider from '../store/create-post-store'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedeTab] = useState("Home");


  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedeTab={setSelectedeTab}></Sidebar>
        <div className="content-container">
          <Header></Header>
          {/* {
            selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>
          } */}
           <Outlet></Outlet>
          <Footer></Footer>
        </div>

      </div>
    </PostListProvider>
  )


}

export default App
