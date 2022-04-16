import React, {useState} from 'react';

import styles from './style.module.scss'

const AddToDo = ({add, currentDay}) => {
    const [toDo, setToDo] = useState('')

    const clickAdd = () => {
        if (toDo) {
            add(toDo,currentDay)
            setToDo('')            
        }
    }

    return (
    <div className={styles.addToDo}>
        <input type='text' onChange={(e) => setToDo(e.target.value)} value={toDo} />
        <button onClick={clickAdd} >Add To Do</button>
    </div>)
}

export default AddToDo;