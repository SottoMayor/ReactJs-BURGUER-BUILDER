import React from 'react';

import classes from './CheckoutSummary.module.css'

import Burguer from '../../Burguer/Burguer';

import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>

            <h1>We hope it tastes well!</h1>

            <div class={{ width: '100%', height: '300px', margin: 'auto' }}>
                <Burguer ingredients={props.ingredients}/>
            </div>

            <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>

        </div>
    )
}

export default checkoutSummary;
