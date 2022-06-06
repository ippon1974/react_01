import React from 'react';

const Person = (props) => {
    return (
        <div>
            <strong>{props.person.id} {props.person.name} {props.person.age} {props.person.city}</strong>
        </div>
    );
};

export default Person;