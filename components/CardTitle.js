import React from "react";
export default function CardTitle(){
    return(
        <div className="title">
            <img src="./images/hanan.jpg"/>
            <h1>Hanan Karam</h1>
            <h2>Frontend Developer</h2>
            <h3>hanankaram.me</h3>
            
            <div className="buttons">
                <div className="left" >
                    <img src="./images/envelope.png"  width="15"/>
                    <span>Email</span>
                </div>
                
                <div className="right">
                    <img src="./images/linkedin.png" width="15"/>
                    <span>LinkedIn</span>
                    
                </div>
            </div>
        
        </div>
    )
}