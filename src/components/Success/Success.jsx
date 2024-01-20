import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Success = () => {
    // set useDispatch as dispatch
    const dispatch = useDispatch()

    // set useHistory ad history
    const history = useHistory()

    const handleClick = () => {
        dispatch({type: "RESET"});
        history.push('/')
    }

    return (
        <div>
            <h2>Thank You!</h2>
            <button data-testid="next" onClick={handleClick}>Leave New Feedback</button>
        </div>
    )
}

export default Success