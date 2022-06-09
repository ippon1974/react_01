import React from 'react';
import PersonItem from "./PersonItem";

const PersonList = ({persons, index}) => {
    return (
        <div>
            {persons.map((person, index) =>
                <PersonItem number={index + 1} person={person} key={person.id}/>
                )}
        </div>
    );
};

export default PersonList;