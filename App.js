import React from "react";
import CardTitle from "./components/CardTitle";
import CardBio from "./components/CardBio";
import CardFooter from "./components/CardFooter";
export default function App(){
    return(
        <div className="container">
            <CardTitle/>
            <CardBio/>
            <CardFooter/>
        
        </div>
    )
}