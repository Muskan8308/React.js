import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import SideBar from "../components/SideBar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import PostListProvider from "../store/post-lists-store";
import { Outlet } from "react-router-dom";

function App() {
  // We need to declare a state by which we select the content to show on the page

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <SideBar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></SideBar>
          <div className="content">
            <Header></Header>
            {/* {selectedTab === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )} */}

            {/* Taken from react-router-dom to display */}
            <Outlet/>     

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
