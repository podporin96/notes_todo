import React, {useState} from 'react';

import Day from './../Day/Day'
import Check from './../Check/Check'

import styles from './style.module.scss'

const data = [{
    id: 1,
    day: 'Monday',
    checks: []
},
{
    id: 2,
    day: 'Tuesday',
    checks: []
},
{
    id: 3,
    day: 'Wednesday',
    checks: []
},
{
    id: 4,
    day: 'Thursday',
    checks: []
},
{
    id: 5,
    day: 'Thursday',
    checks: []
},
{
    id: 6,
    day: 'Saturday',
    checks: []
},
{
    id: 7,
    day: 'Sunday',
    checks: []
},
]

const Bar = () => {
    const [newData, setNewData] = useState(data)

    const changeCheck = (dayId, label, checked) => {
        let da = [...newData]

        da.find((obj) => obj.id === dayId).checks.find((check) => check.label === label).checked = checked
        
        setNewData(da)
    }

    const addedDay = (newToDo, day) => {
        let da = [...newData]
        da.find((obj) => obj.day === day).checks.push({label: newToDo, checked: false})

        setNewData(da)
    }

    return (
    <div className={styles.bar}>
        {newData.map((obj) => {
            return (
                <Day day={obj.day} key={obj.id} add={addedDay} >
                    {obj.checks.map((todo, item) => <Check key={item} dayId={obj.id} label={todo.label} checked={todo.checked} changeCheck={changeCheck} />)}
                </Day>
            )
        })}
    </div>)
}

export default Bar;