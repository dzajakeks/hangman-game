import { useState, Fragment, useEffect, useCallback } from 'react';
import './App.css';
import Hanger from './components/Hanger';
import Keyboard from './components/Keyboard';
import Word from './components/Word';
import words from './wordsList.json';

function App() {

  
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length) ] 
  })
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

  const incorrectLetters = guessedLetter.filter(letter => !wordToGuess.includes(letter));
  
  const isLose = incorrectLetters.length >= 6;
  const isWin = wordToGuess.split('').every(letter => guessedLetter.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetter.includes(letter) || isLose || isWin) return

    setGuessedLetter(currentLetters => [...currentLetters, letter])
  }, [guessedLetter, isLose, isWin])
  

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if(!key.match(/^[a-z]$/)) return;

      e.preventDefault()
      addGuessedLetter(key);
    }

    document.addEventListener('keypress', handler)

    return () => document.removeEventListener('keypress', handler)

  }, [guessedLetter])

  return (
    <Fragment>
      <h1 className='winlose'> {isWin && "Congrats! - Refresh To Try Again"}
      {isLose && `The word was "${wordToGuess}" -  Refresh to try again`}
      </h1>
      <Hanger numberOfGuesses={incorrectLetters.length} />
      <Word wordToGuess={wordToGuess} guessedLetter={guessedLetter}/>
      <Keyboard disabled={isWin || isLose} inactiveLetters={incorrectLetters} activeLetters={guessedLetter.filter(letter => wordToGuess.includes(letter))} addGuessedLetter={addGuessedLetter} />
    </Fragment>
  )
}

export default App
