import React from "react"
import "./collectionCard.css"

export const CollectionCard = ({collection}) => {

    return (
    <section className="collection">
        <div className="attempt">
        <h1 className="title">"{collection.collectionTitle}"</h1>
        <a href="/profile">
            <img className="brdrme" src= {collection.img} alt="collection"></img>
        </a>
        </div>
    </section>
)
    }