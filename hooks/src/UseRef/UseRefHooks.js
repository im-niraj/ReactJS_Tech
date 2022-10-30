import React, { useEffect, useRef, useState } from 'react'

const UseRefHooks = () => {
    const [name, setName] = useState('');
    const inputRef = useRef();
    const prevName = useRef();

    useEffect(() => {
        prevName.current = name;
    }, [name])


    function focus() {
        inputRef.current.focus();
        inputRef.current.value = 'Some Value'
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>my name is <b>{name}</b> and it is used to be <b>{prevName.current}</b></div>
            <button onClick={focus}>Focus</button>

        </>
    )
}

export default UseRefHooks