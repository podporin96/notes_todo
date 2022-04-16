import React from 'react';

import styles from './style.module.scss'

const Check = ({label, checked, changeCheck, dayId}) => {

    return (
    <div className={styles.check}>
        <input type='checkbox' className={styles.checkbox} checked={checked} onChange={() => changeCheck(dayId, label, !checked)}/>
        <label>{label}</label>
    </div>)
}

export default Check;