import React from 'react'
import Form from './Form';
import ClassNames from "./Header.module.scss";

function Header({ handleSubmit }) {

    return (
        <div className={ClassNames.Header}>
            <h1>SnapShot</h1>
            <Form handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Header