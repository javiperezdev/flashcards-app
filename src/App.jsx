import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'

const initialCards = [
    {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What is a Component?",
    answer: "A reusable piece of code that returns a React element (HTML) to be rendered."
  },
  {
    id: 3,
    question: "What is State?",
    answer: "An object that determines how a component renders and behaves. When it changes, the component re-renders."
  },
  {
    id: 4,
    question: "What is a Prop?",
    answer: "Short for 'properties'. It is data passed from a parent component to a child component."
  },
  {
    id: 5,
    question: "What is the array method .map() used for in React?",
    answer: "It is often used to transform a list of data (arrays) into a list of React elements."
  },
  {
    id: 6,
    question: "What is the virtual DOM?",
    answer: "A lightweight copy of the real DOM. React uses it to see what changed and update the real DOM efficiently."
  }
]

function App() {
  const[newCurrentCard, setNewCurrentCard] = useState(0)
  const[newShowAnswer, setNewShowAnswer] = useState(false)
  

  const handleNextCard = () => {
    if (newCurrentCard === initialCards.length - 1) {
      return;
    }

    setNewCurrentCard(newCurrentCard + 1);
    setNewShowAnswer(false);
  }

  const handlePreviousCard = () => {
    if (newCurrentCard === 0) {
      return;
    }

    setNewCurrentCard(newCurrentCard - 1)
    setNewShowAnswer(false);
  
  }

  const handleFlip = () => {
      setNewShowAnswer(newShowAnswer ? false : true);
  }

  return (
      <div className='app-container'>
        <h1>Flashcards app</h1>
        {<Flashcard key={initialCards[newCurrentCard].id} flashcard={initialCards[newCurrentCard]} showAnswer={newShowAnswer} onCardClick={handleFlip}/>}
        <div className='button-row'>
          <button onClick={handlePreviousCard}>previous flashcard</button> 
          <button onClick={handleNextCard}>next flashcard</button> 
        </div>
      </div>
  )
}

export default App;
