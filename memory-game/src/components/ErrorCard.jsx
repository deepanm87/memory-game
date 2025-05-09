import { useRef, useEffect } from "react"
import RegularButton from "./RegularButton"

const ErrorCard = ({handleClick}) => {
    const divRef = useRef(null)

    useEffect( () => {
        divRef.current.focus()
    }, [])

    return(
        <div className="form form-inner" ref={divRef} tabIndex={-1}>
            <p>Sorry, there was an error.</p>
            <p>Please come back later or click the button below to try restarting the game.</p>
            <RegularButton handleClick={handleClick}>
                Restart game
            </RegularButton>
        </div>
    )
}

export default ErrorCard