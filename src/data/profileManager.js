const remoteURL = "http://localhost:8088"

export const getBackgrndimgsByCollectionId = (collectionId) => {
    // console.log(collectionId)
    return fetch (`${remoteURL}/backgrndimgs?collectionId=${collectionId}`)
    .then(res => res.json())
}

export const getImgelementsByCollectionId = (collectionId) => {
    console.log(collectionId)
    return fetch (`${remoteURL}/imgelements?collectionId=${collectionId}`)
    .then(res => res.json())
}

export const getBackgrndimgsBybackgroundImgId = (id) => {
    return fetch (`${remoteURL}/backgrndimgs/${id}`)
    .then(res => res.json())
}

export const getImageElementsByImageElementsIdId = (id) => {
    return fetch (`${remoteURL}/imgelements?id=${id}`)
    .then(res => res.json())
}

export const deleteBackgrndimgsByBackgroundImageId = (id) => {
    return fetch (`${remoteURL}/backgrndimgs/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const deleteImgElementsByBackgroundImageId = (id) => {
    return fetch (`${remoteURL}/imgelements/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const deleteCollectionById = (id) => {
    return fetch (`${remoteURL}/collections/${id}`, {
        method: "DELETE"
    }).then(res => res.json())  
}


// export const getCollectionByCollectionId = (id) => {
//     console.log(id)
//     return fetch (`${remoteURL}/collections/${id}`)
//     .then(res => res.json())
// }

// export const deleteCollection = (id) => {
//     return fetch(`${remoteURL}/collections/${id}`, {
//         method: "DELETE"
//     }).then(result => result.json())
// }