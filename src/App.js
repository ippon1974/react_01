import React, {useRef, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PersonList from "./components/PersonList";
import PhoneLIst from "./components/PhoneLIst";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState(
        [
            {id:1, title: 'JavaScript 1', body:'Description of my POSTS'},
            {id:2, title: 'JavaScript 2', body:'Description of my POSTS'},
            {id:3, title: 'JavaScript 3', body:'Description of my POSTS'},
            {id:4, title: 'JavaScript 4', body:'Description of my POSTS'}
        ]
    )

    const [phones, setPhones] = useState(
        [
            {id:1, name: 'Senao-258', cost: 258 /7.88},
            {id:2, name: 'Senao-458', cost: 555/0.78},
            {id:3, name: 'Senao-868', cost: 1500/77.233}
        ]
    )

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    const addNewPost =  (e) => {
        e.preventDefault();
       const newPost = {
           id: Date.now(),
           title,
           body
       }
       setPosts([...posts, newPost]);
    }

    return (
    <div className="App">

        <form action="">

            {/*Управлияемы компонент*/}

            <MyInput
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Название поста"/>

                {/*Не управляемый компонент*/}

            <MyInput
                type="text"
                value={body}
                onChange={e => setBody(e.target.value)}
                placeholder="Описание поста"/>

            <MyButton onClick={addNewPost}>Создать Пост</MyButton>

        </form>

        <PostList posts={posts} title="Post of JS"/>
       {/*<PhoneLIst phones={phones} title="List of Radio Phone"></PhoneLIst>*/}

    </div>
  );
}

export default App;