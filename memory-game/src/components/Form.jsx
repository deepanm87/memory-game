import { useRef, useEffect } from "react"
import Select from "./Select"
import RegularButton from "./RegularButton"

const Form = ({ handleSubmit, handleChange, isFirstRender }) => {

    const divRef = useRef(null)
    useEffect( () => {
        !isFirstRender && divRef.current.focus()
    }, [])

    return(
        <div className="form-container" ref={divRef} tabIndex={-1}>
            <p>Choose custom emoji category and the number of memory cards to play the game</p>
            <form className="form">
                <Select handleChange={handleChange} />
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}

export default Form