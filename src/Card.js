import React from 'react';

const Card = ({name, username, id}) => {
return (
    <div className='bg-light-green ma3 pa3 grow dib'>
        <img alt ='robots' src = {`https://robohash.org/${id}?200x200`}/>
    <div>
        <h2>{name}</h2>
        <p>{username}</p>
    </div>
    </div>
);
}
export default Card;

