import React from 'react';

const PhoneItem = (props) => {
    return (
        <div>
            {props.phone.id} {props.phone.name} {props.phone.cost}
        </div>
    );
};

export default PhoneItem;