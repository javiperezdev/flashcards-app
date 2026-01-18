import './Flashcard.css'
const Flashcard = ({ flashcard, showAnswer, onCardClick }) => {
    return (
        <div className="card" onClick={onCardClick}>
            <p>{showAnswer ? flashcard.answer : flashcard.question}</p>
        </div>
    )
}

export default Flashcard;