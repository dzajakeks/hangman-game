import React, { Fragment } from 'react';
import classes from '../modules/Hanger.module.css';

const HEAD = (
    <div style={{border: '2px solid white', borderRadius: '50%', width: '40px', height: '40px', position: 'absolute', left: '39px', top: '30px'}} />
)
const BODY = (
    <div style={{width: '3px', height: '65px', backgroundColor: 'white', position: 'absolute', left: '57px', top: '70px'}} />
)
const RIGHT_ARM = (
    <div style={{width: '40px', height: '3px', backgroundColor: 'white', position: 'absolute', left: '57px', top: '90px'}} />
)
const LEFT_ARM = (
    <div style={{width: '40px', height: '3px', backgroundColor: 'white', position: 'absolute', left: '20px', top: '90px'}} />
)
const RIGHT_LEG = (
    <div style={{width: '55px', height: '3px', backgroundColor: 'white', position: 'absolute', left: '50px', top: '152px', transform: 'rotate(45deg)'}} />
)
const LEFT_LEG = (
    <div style={{width: '55px', height: '3px', backgroundColor: 'white', position: 'absolute', left: '12px', top: '152px', transform: 'rotate(-45deg)'}} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangerProps = {
    numberOfGuesses: number
}

const Hanger = ({numberOfGuesses}:HangerProps) => {
  return (
    <Fragment>
        <div>
        <div className={classes.hanger__container}>
            <div className={classes.hanger__rope__holder}>
            <div className={classes.hanger__hanger}></div>
                {BODY_PARTS.slice(0, numberOfGuesses)}
            </div>
            <div className={classes.hanger__straight}></div>
            <div className={classes.hanger__bottom}></div>
        </div>
        </div>
    </Fragment>
  )
}

export default Hanger