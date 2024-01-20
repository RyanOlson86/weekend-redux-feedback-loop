import { useSelector } from "react-redux"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios"

const Review = () => {
    const reduxStore = useSelector(store => store)
    console.log(reduxStore.comments)

    const handleSubmit = () => {
        axios.post('/api/feedback', reduxStore)
        .then(response => {
            console.log('added')
        })
        .catch(error => {
            console.log('error in POST', error)
        })
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {reduxStore.feeling}</p>
            <p>Understanding: {reduxStore.understanding}</p>
            <p>Support: {reduxStore.support}</p>
            <p>Comments: {reduxStore.comments}</p>
            <button data-testid="next" onClick={handleSubmit}>SUBMIT</button>
        </div>
        
    )
}

export default Review