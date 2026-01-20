import Flashcard from "./Flashcard"   
import './Play.css'

const Play = ({ initialCards, newCurrentCard, handlePreviousCard, handleNextCard, newShowAnswer,  handleFlip}) => {
    return (
        <div className="play-container">
            {initialCards.length > 0 ? <Flashcard key={initialCards[newCurrentCard].id} flashcard={initialCards[newCurrentCard]} showAnswer={newShowAnswer} onCardClick={handleFlip}/> : <p>Currently the are no flashcards, please create one</p>}
            <div className='button-row'>
              <button className='btn' onClick={handlePreviousCard}>previous flashcard</button> 
              <button className='btn' onClick={handleNextCard}>next flashcard</button> 
            </div>
        </div>
    )
}

export default Play