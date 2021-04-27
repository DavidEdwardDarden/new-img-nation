import React from "react"

import "./collectionCard.css"


// import { getFriendByUserId } from "/data/FriendManager"
// import { Link } from "react-router-dom"

export const CollectionCard = ({collection}) => {

console.log("here comes a collection test:")
    console.log(collection.img)
    return (
    <section className="collection">
        <div>
        <h4>{collection.collectionTitle}</h4>
            <img src= {require(`../images/${collection.img}`).default} alt="collection"></img>
        {/* <h2>{collection.user.name}</h2> */}
        {/* <h3>email:</h3>
        <h4>{collection.user.email}</h4> */}
        </div>
    </section>
)
    }