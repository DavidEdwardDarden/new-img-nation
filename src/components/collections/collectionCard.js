import React from "react"

import "./collectionCard.css"


// import { getFriendByUserId } from "/data/FriendManager"
// import { Link } from "react-router-dom"

export const CollectionCard = ({collection}) => {

// console.log("here comes a collection test:")
//     console.log(collection.img)
    return (
    <section className="collection">
        <div>
        <h2>"{collection.collectionTitle}"</h2>
        <a href="/profile">
            <img className="brdrme" src= {collection.img} alt="collection"></img>
        </a>
        {/* <h2>{collection.user.name}</h2> */}
        {/* <h3>email:</h3>
        <h4>{collection.user.email}</h4> */}
        </div>
    </section>
)
    }