import React from 'react';
import Person from "./Person";

const PersonList = ({persons, title}) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{title}</h1>
            {persons.map(person =>
                <Person person={person} key={person.id}/>
            )}
        </div>
    );
};

export default PersonList;