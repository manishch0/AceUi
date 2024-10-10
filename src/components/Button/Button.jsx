import React from "react";
import './button.css'
import Loader from "../Loader/Loader";


function Button(props) {
    const { children, isLoading = false, onClick = () => { }, style = {} } = props

    return (
        <>
            <button style={style} aria-disabled={"true"} onClick={(event) => {
                if (isLoading) {
                    return;
                }
                return onClick(event);
            }} className="btn">{isLoading && (<Loader></Loader>)}{children}</button>
        </>
    )
}

export default Button;


