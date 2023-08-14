import React from "react";

function Greet(props) {
    // const {name , heroName} = props //Destructuring
   return(
    <div>
        <h1>
             Hello {props.name} a.k.a. {props.heroName}
        </h1>
        {props.children}
    </div>
   ) 
   
}

// const Greet = () => <h1>Hello Shashank</h1>

export default Greet;