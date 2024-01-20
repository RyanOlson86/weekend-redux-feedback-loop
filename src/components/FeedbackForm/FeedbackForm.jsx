import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const FeedbackForm = ({text, property, title, nextPath}) => {
    // Local state to store temporary form inputs
    const [formInput, setFormInput] = useState('')

    // set useDispatch as dispatch
    const dispatch = useDispatch()

    // set useHistory ad history
    const history = useHistory()

    // Function to handle when "next" is clicked
    // Function should dispatch inputs to store.js using props then use route to go to next form input
    const handleNext = (event) => {
        event.preventDefault();
        dispatch({
            type: "ADD_FEEDBACK",
            payload: {
                [property]: formInput
            }
        })
        history.push(nextPath)

    }
    
    return (
        <>
            <h2>{text}</h2>
            <form onSubmit={handleNext}>
                <label>{title}</label>
                <input type="text" onChange={(event)=>setFormInput(event.target.value)}/>
                <button type="submit" data-testid="next">Next</button>
            </form>
        </>

    )
}

export default FeedbackForm