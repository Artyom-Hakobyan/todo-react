import '../App.css';
import React, { useState } from 'react';

const InputForm = (props) => {
    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        props.onSubmit({
            id: Math.random() * 10000,
            text: input
        })
        setInput("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='Add a To-Do item'
                    value={input}
                    name="text"
                    onChange={handleChange}
                     />
                <button>Add</button>
            </form>
        </div>
    );
};

export default InputForm;