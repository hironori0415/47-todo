import React, { useState } from 'react' // 予めimportすることで、React. を省略可

const Item = ({ content }) => {
    const [isDone, setIsDone] = useState(false)

    return (
        <li>
            <input type='checkbox' onChange={() => {
                setIsDone(!isDone)
            }} />
            <span style={
                { textDecoration: isDone ? 'line-through' : 'none' }
            }>{content}</span>
        </li>
    )
}

export default Item