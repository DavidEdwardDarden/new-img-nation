const remoteURL = "http://localhost:8088"

export const getCollectionByUserId = (userId) => {
    return fetch (`${remoteURL}/collections?userId=${userId}`)
    .then(res => res.json())
}

export const getCollectionByCollectionId = (id) => {
    // console.log(id)
    return fetch (`${remoteURL}/collections/${id}`)
    .then(res => res.json())
}

export const getAllCollections = () => {
    return fetch (`${remoteURL}/collections?_expand=user`)
    .then(res => res.json())
}


export const deleteCollection = (id) => {
    return fetch(`${remoteURL}/collections/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}


export const addCollections = (newcollections) => {
    return fetch(`${remoteURL}/collections/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newcollections)
    }).then(response => response.json())
}

export const updateCollection = (editedCollection) =>{
    return fetch(`${remoteURL}/collections/${editedCollection.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedCollection)
    }).then(data => data.json())
}