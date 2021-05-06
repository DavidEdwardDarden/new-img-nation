const remoteURL = "http://localhost:8088"

export const getBackgrndimgsByCollectionId = (collectionId) => {
    // console.log(collectionId)
    return fetch (`${remoteURL}/backgrndimgs?id=${collectionId}`)
    .then(res => res.json())
}

export const getImgelementsByCollectionId = (collectionId) => {
    console.log(collectionId)
    return fetch (`${remoteURL}/imgelements?id=${collectionId}`)
    .then(res => res.json())
}

// export const getCollectionByCollectionId = (id) => {
//     console.log(id)
//     return fetch (`${remoteURL}/collections/${id}`)
//     .then(res => res.json())
// }