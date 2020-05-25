import React, {useState, useEffect} from 'react';

const Numbers = () => {
    const [numbers, setNumbers] = useState(['one','two','three']);

    const addNumber = () => {
        setNumbers([...numbers,'four'])
    }

    useEffect(()=>{
        console.log('our use case effect triggers')
    })
    return (
        <div>
        <h1>Numbers</h1>
        {
            numbers.map(num=>{
                return <h4>{num}</h4>
            })
        }
        <button onClick ={addNumber}>Add</button>
        </div>
    )
}

export default Numbers;