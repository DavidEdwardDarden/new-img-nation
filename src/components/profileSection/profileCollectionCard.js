import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from "react-router-dom"
import "./profileExpandedCollectionCard.css"

export const ProfileCollectionCard = ({collection}) => {

    // const [backgrndimgs, setBackgrndimgs] = useState({});
    // const [imgelements, setImgelements] = useState({});

    // const {collectionId} = useParams();
    // const history = useHistory();
// console.log(collection)
//     const handleCollectionClick = () =>{
// history.push(`/expandedcollection/${collection.id}`)
//     }



    return (
    <section className="collection">
        <div>
        <h4>{collection.collectionTitle}</h4>
       <Link to={`/expandedcollection/${collection.id}`}>
            <img className="brdrme" src= {collection.img} 
            alt="collection" />
       </Link>
        </div>
    </section>
)
    }