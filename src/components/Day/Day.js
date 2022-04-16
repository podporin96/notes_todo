import React from 'react';

import AddToDo from './../AddToDo/AddToDo'
import styles from './style.module.scss'

const Day = ({day='', children, add}) => {
    
    return (
    <div className={styles.day}>
        <p>{day}</p>
        {children}
        <AddToDo add={add} currentDay={day} />
    </div>)
}

export default Day;