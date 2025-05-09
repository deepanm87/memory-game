import { data } from "../data/data"
import Option from "./Option"

const Select = ({ handleChange }) => {
    const selectEl = Object.entries(data).map( ([ key, value]) => (
        <div key={key} className="form-inner">
            <label htmlFor={key}>Select a {key}</label>
            <select
                name={key}
                id={key}
                onChange={handleChange}
                className="select-ele"
            >
                <Option valueArray={value} />
            </select>
        </div>
    ))
    return(
        {selectEl}
    )
}

export default Select