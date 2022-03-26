import React from "react";

function Divcomponement  (props){
    return (
        <>
                          <h1>chrono :{props.state.counter} </h1>
                            <h1> {props.state.ImageSrc} </h1>
                            <h1> {props.state.fullname}</h1>
                            <h1> {props.state.bio} </h1>
                            <h1> {props.state.Profession} </h1>
         </>


    )
}

export default Divcomponement ;