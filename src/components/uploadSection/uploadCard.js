import React from "react"

import "./uploadCard.css"


// import { getFriendByUserId } from "/data/FriendManager"
// import { Link } from "react-router-dom"

export const BackgrndimgsCard = ({bkgrndimg}) => {

console.log("here comes a background image test:")
    console.log(bkgrndimg.img)
    return (
    <section className="collection">
        <div>
        <h4>Your Upload:</h4>
            <img src= {require(`../images/${bkgrndimg.url}`).default} alt="collection"></img>
        </div>
    </section>
)
    }