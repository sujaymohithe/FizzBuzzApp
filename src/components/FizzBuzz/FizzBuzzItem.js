import React from "react";

const FizzBuzzItem = props => {
    return (
        <>
            {props.children(props.value)}
        </>
    );
}

export default FizzBuzzItem;
