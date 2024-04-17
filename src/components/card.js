import { useContext } from "react";
import { Usercontext } from "../usercontext";

export default function Card(){
    const {name, age} = useContext(Usercontext)

    return(
        <>
         <h4>Card Component</h4>
         <span>Employee name: {name}</span><br/>
         <span>Employee age: {age}</span>
        </>
    )
}