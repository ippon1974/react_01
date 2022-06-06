import React, {useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PersonList from "./components/PersonList";

function App() {

    const [posts, setPosts] = useState(
        [
            {id:1, title: 'JavaScript 1', body:'Description of my POSTS'},
            {id:2, title: 'JavaScript 2', body:'Description of my POSTS'},
            {id:3, title: 'JavaScript 3', body:'Description of my POSTS'},
            {id:4, title: 'JavaScript 4', body:'Description of my POSTS'}
        ]
    )

    const [posts2, setPosts2] = useState(
        [
            {id:1, title: 'Ptyton 1', body:'Description of my POSTS'},
            {id:2, title: 'Pyton 2', body:'Description of my POSTS'},
            {id:3, title: 'Pyton 3', body:'Description of my POSTS'},
            {id:4, title: 'Pyton 4', body:'Description of my POSTS'}
        ]
    )

    const [posts3, setPosts3] = useState(
        [
            {id:1, title: 'Java 1', body:'Description of my POSTS', age:150},
            {id:2, title: 'Java 2', body:'Description of my POSTS', age:100},
            {id:3, title: 'Java 3', body:'Description of my POSTS', age: 550},
            {id:4, title: 'Java 4', body:'Description of my POSTS', age: 10000}
        ]
    )

    const [persons, setPerson] = useState(
        [
            {id:1, name:"dolboeb", age:-15, city: "New Yourk"},
            {id:2, name:"mudilo", age: 1, city: "Moscow"},
            {id:3, name:"vovan", age: 0.755, city: "Belgorod"}
        ]
    )
    const [persons2, setPerson2] = useState(
        [
            {id:1, name:"dolboeb", age:740, city: "New Yourk"},
            {id:2, name:"mudilo", age: 1000, city: "Moscow"},
            {id:3, name:"vovan", age: 150000, city: "Belgorod"}
        ]
    )



    return (
    <div className="App">
        <PostList posts={posts} title="Post of JS"/>
        <PostList posts={posts2} title="Post of Python"/>
        <PostList posts={posts3} title="Post of Java hi Vovan how are you?"/>
        <br />
        <br />
        <PersonList persons={persons} title="This is dynamic head!"/>
        <PersonList persons={persons2} title="This is TWO dynamic head!"/>
        <br />
    </div>
  );
}

export default App;
