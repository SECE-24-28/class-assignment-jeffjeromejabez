import React from "react";

function Parent(props) {
    console.log(props.gift);
    const fruits = "Apple";
    return (
        <div>
            <h1>Parent Component</h1>
            <h2>Gift From APP: {props.gift}</h2>
            <button onClick={()=>props.giftFromChild(fruits)}>Send Gift</button>
        </div>
    );
}

export default Parent;
