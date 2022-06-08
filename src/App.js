import React, {useRef, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState(
        [
            {id:1, title: 'JavaScript 1', body:'Description of my POSTS'},
            {id:2, title: 'JavaScript 2', body:'Description of my POSTS'},
            {id:3, title: 'JavaScript 3', body:'Description of my POSTS'}
        ]
    )
    // const [post, setPost] = useState({title: "", body: ""});
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const addNewPost =  (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        console.log(newPost);
        setPosts([...posts, newPost]);
    }

    return (
    <div className="App">

        <form action="">
            <MyInput
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Название поста"/>

            <MyInput
                type="text"
                value={body}
                onChange={e => setBody(e.target.value)}
                placeholder="Описание поста"/>

            <MyButton onClick={addNewPost}>Создать Пост</MyButton>
        </form>

        <PostList posts={posts} title="Post of JS"/>


    </div>
  );
}

export default App;