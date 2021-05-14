import React from "react"
import "./collectionCard.css"
import { Link } from "react-router-dom";

export const CollectionCard = ({collection}) => {

    console.log(collection.userId)
    console.log(sessionStorage.getItem("nation_user"))
    
    const goHere = () => {
        return `/foreignprofile/${collection.userId}`
    }
    
    return (
    <section className="collection">
        <div className="attempt">
        {/* <h1 className="title">"{collection.collectionTitle}"</h1> */}
        
        {/* TERNARY STATEMENT
if the logged in user owns the collection, show a card with a link to their profile.
if the logged in user doesn't own the collection, show a card with a link to a "foreign profile"
*/}
        
{parseInt(sessionStorage.getItem("nation_user")) === collection.userId ? (<a href="/profile">
<h1 className="title">"{collection.collectionTitle}" ⭐</h1>
            <img className="brdrme" src= {collection.img} alt="collection"></img>
        </a>) : (<Link to={goHere}>
            <h1 className="title">"{collection.collectionTitle}"</h1>
            <img className="brdrme" src= {collection.img} alt="collection"/>
        </Link>) 
}


        </div>
    </section>
)
    }