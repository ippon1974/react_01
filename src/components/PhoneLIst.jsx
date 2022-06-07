import React from 'react';
import PhoneItem from "./PhoneItem";

const PhoneLIst = ({phones, title}) => {
    return (
        <div>
            <h1>{title}</h1>
        <div>
            {phones.map(phone =>
                <PhoneItem phone={phone} key={phone.id}/>
            )}
        </div>
     </div>
    );
};

export default PhoneLIst;