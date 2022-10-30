import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [resouceType, setResourceType] = useState('posts');
    useEffect(() => {
        console.log("render");
    }, [resouceType])

    return (
        <div>
            <button onClick={() => setResourceType('posts')} >Posts</button>
            <button onClick={() => setResourceType('users')} >Users</button>
            <button onClick={() => setResourceType('comments')} >Comments</button>
        </div>
    )
}

export default UseEffect