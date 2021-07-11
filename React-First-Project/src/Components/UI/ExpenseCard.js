import React from 'react';
import './ExpenseCard.css'
const ExpenseCard = (props) => {
    const classes = 'expense-card '+props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}
export default ExpenseCard;