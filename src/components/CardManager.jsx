import { useState } from "react";
import './CardManager.css'

const CardManager = ({ initialCards, setInitialCards }) => {
    const[newQuestion, setNewQuestion] = useState('')
    const[newAnswer, setNewAnswer] = useState('')

    const handleQuestionChange = (event) => {
        setNewQuestion(event.target.value)
    }

    const handleAnswerChange = (event) => {
        setNewAnswer(event.target.value)
    }

    const handleNewCard = (event) => {
        event.preventDefault()
        const cardObject = {
            id: (initialCards.length + 1),
            question: newQuestion,
            answer: newAnswer
        }

        console.log(newQuestion)

        setInitialCards(initialCards.concat(cardObject))
        setNewQuestion('')
        setNewAnswer('')
    } 


    return(
        <form onSubmit={handleNewCard} className="manager-form">
            <div className="form-group">
                <label>Question:</label>
                <input className="input-field" value={newQuestion} onChange={handleQuestionChange}/>
            </div>
            
            <div className="form-group">
                <label>Answer:</label>
                <input className="input-field" value={newAnswer} onChange={handleAnswerChange}/>
            </div>
            <button className="btn" type="submit">Save flashcard</button>
        </form>
    )
}

export default CardManager;