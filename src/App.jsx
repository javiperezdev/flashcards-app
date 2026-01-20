import { useState } from 'react'
import './App.css'
import Play from './components/Play'
import CardManager from './components/CardManager'

function App() {
  const [initialCards, setInitialCards] = useState([])
  const[newMode, setNewMode] = useState('manage')
  const[newCurrentCard, setNewCurrentCard] = useState(0)
  const[newShowAnswer, setNewShowAnswer] = useState(false)
  

  const handleNextCard = () => {
    if (newCurrentCard === initialCards.length - 1) {
      return
    }

    setNewCurrentCard(newCurrentCard + 1);
    setNewShowAnswer(false)
  }

  const handlePreviousCard = () => {
    if (newCurrentCard === 0) {
      return
    }

    setNewCurrentCard(newCurrentCard - 1)
    setNewShowAnswer(false)
  
  }

  const handleFlip = () => {
      setNewShowAnswer(newShowAnswer ? false : true)
  }

  return (
      <div className='app-container'>
        <h1>Flashcards app</h1>
        <nav className='navbar'>
          <a onClick={() => setNewMode('play')}>Play Game</a>
          <a onClick={() => setNewMode('manage')}>Manage Cards</a>
        </nav>

        {newMode == 'manage' && (
          <CardManager initialCards={initialCards} setInitialCards={setInitialCards}/>
        )}

        {newMode == 'play' && (
          <Play initialCards={initialCards} newCurrentCard={newCurrentCard} handlePreviousCard={handlePreviousCard} handleNextCard={handleNextCard} newShowAnswer={newShowAnswer}  handleFlip={handleFlip} />
        )}
      </div>
  )
}

export default App;
