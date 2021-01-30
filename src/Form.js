//入力して保存するjs

import React, { useState } from 'react'


const From = ({ todos, setTodos }) => {
    const [value, setvalue] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                content: value
            }
        ])
        // 演習2 回答
        setvalue('')
        // console.log('value: ', value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                // 演習2　回答
                value={value}
                type='text'
                onChange={e => {
                    setvalue(e.target.value)
                }}
            />
        </form>
    )
}

export default From