import React from 'react';
import { Link } from "react-router-dom"

export const ForeignProfileCollectionCard = ({collection}) => {

    return (
    <section className="collection">
        <div>
        <h2 className="grayme" >"{collection.collectionTitle}"</h2>
       <Link to={`/foreignexpandedcollection/${collection.id}`}>
            <img className="brdrme" src= {collection.img} 
            alt="collection" />
       </Link>
        </div>
    </section>
)
    }