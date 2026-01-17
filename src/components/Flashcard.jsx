const Flashcard = ({ flashcard, showAnswer }) => {
    return (
        <div>
            <p>{showAnswer ? flashcard.answer : flashcard.question}</p>
        </div>
    )
}

export default Flashcard;