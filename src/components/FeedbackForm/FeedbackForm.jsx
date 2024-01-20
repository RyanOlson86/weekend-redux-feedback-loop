import { useState } from "react"
import { useDispatch } from "react-redux"

const FeedbackForm = () => {
    // Local state to store temporary form inputs
    const [formInput, setFormInput] = useState('')
    // set useDispatch as dispatch
    const dispatch = useDispatch()

    // Function to handle when "next" is clicked
    // Function should dispatch inputs to store.js
    const handleNext = (event) => {
        event.preventDefault();
        dispatch({
            type: "ADD_FEEDBACK",
            payload: {
                understanding: formInput
            }
        })
    }
    
    return (
        <>
            <h2>Any Comments?</h2>
            <form onSubmit={handleNext}>
                <label>Feeling?</label>
                <input type="text" onChange={(event)=>setFormInput(event.target.value)}/>
                <button type="submit">Next</button>
            </form>
        </>

    )
}

export default FeedbackForm