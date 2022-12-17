import React, { Fragment } from 'react';
import classes from '../modules/Word.module.css';

type WordProps = {
    guessedLetter: string[]
    wordToGuess: string
}

const Word = ({wordToGuess, guessedLetter}: WordProps) => {

  return (
    <Fragment>
        <div className={classes.word__container}>
            {wordToGuess.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid white" }} key={index}>
                    <span style={{visibility: guessedLetter.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>
                </span>
            ))}
        </div>
    </Fragment>
  )
}

export default Word