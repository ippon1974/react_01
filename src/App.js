import React, {useRef, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PersonList from "./components/PersonList";

function App() {

    const [posts, setPosts] = useState(
        [
            {id:1, title: 'JavaScript 1', body:'Description of my POSTS'},
            {id:2, title: 'JavaScript 2', body:'Description of my POSTS'},
            {id:3, title: 'JavaScript 3', body:'Description of my POSTS'}
        ]
    )

    const [persons, setPersons] = useState(
        [
            {id:1, name: 'JavaScript 1', age:'D'},
            {id:1, name: 'JavaScript 1', age:'D'}
        ]
    )
   ;

    const [post, setPost] = useState({title:"", body:""});

    const addNewPost =  (e) => {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title:"", body:""});

    }

    return (
    <div className="App">

        <form action="">
            <MyInput
                type="text"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                placeholder="Название поста"/>

            <MyInput
                type="text"
                value={post.body}
                onChange={e => setPost({...post,body: e.target.value})}
                placeholder="Описание поста"/>

            <MyButton onClick={addNewPost}>Создать Пост</MyButton>
        </form>

        <PostList posts={posts} title="Post of JS"/>
        <PersonList persons={persons}/>

    </div>
  );
}

export default App;