import React, {useRef, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState(
        [
            {id:1, title: 'JavaScript 1', body:'Description of my POSTS'},
            {id:2, title: 'JavaScript 2', body:'Description of my POSTS'},
            {id:3, title: 'JavaScript 3', body:'Description of my POSTS'}
        ]
    )

    const  createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    return (
    <div className="App">

        <PostForm create={createPost}/>

        <PostList posts={posts} title="List post of JS"/>
    </div>
  );
}

export default App;