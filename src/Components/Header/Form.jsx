import React, { useState } from 'react'
import ClassNames from "./Header.module.scss";

function Form({ handleSubmit }) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    function handleClick(e, searchTerm) {
        handleSubmit(e, searchTerm);
    }

    const Buttons = ["Mountains", "Beaches", "Birds", "Food"]

    return (
        <form onSubmit={(e) => handleSubmit(e, searchTerm)}>
            <input
                onChange={handleChange}
                value={searchTerm}
                type="text"
                required
                className={ClassNames.Input}
                placeholder="Search .... "
            />
            <button className={ClassNames.Button} type="submit" disabled={!searchTerm.trim()}>
                <svg
                    height="32"
                    width="32">
                    <path
                        d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                        fill={"#ffffff"}
                        fillRule="evenodd">
                    </path>
                </svg>
            </button>

            {/* Starting the Ready Made Buttons */}

            <div className={ClassNames.ButtonsContainer}>
                {Buttons.map((element, index) => {
                    return <button key={index} onClick={(e) => handleClick(e, element)}>{element}</button>
                })}
            </div>
        </form>
    )
}
export default Form;