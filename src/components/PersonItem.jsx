import React from 'react';

const PersonItem = (props) => {
    return (
        <div>
            {props.person.id} / {props.person.name} / {props.person.age}
        </div>
    );
};

export default PersonItem;