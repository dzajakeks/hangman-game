import React, { Fragment } from 'react';
import classes from '../modules/Keyboard.module.css';

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    inactiveLetters: string[]
    activeLetters: string[]
    addGuessedLetter: (letter: string) => void 
    disabled: boolean
}

const Keyboard = ({inactiveLetters, activeLetters, addGuessedLetter, disabled}: KeyboardProps) => {

  



  return (
    <Fragment>
      <div className={classes.keyboard__cont}>
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${classes.btn} ${isActive ? classes.active : ""} ${
              isInactive ? classes.inactive : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
      </div>
    </Fragment>
  )
}

export default Keyboard