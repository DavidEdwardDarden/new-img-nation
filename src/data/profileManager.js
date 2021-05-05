const remoteURL = "http://localhost:8088"

export const getBackgrndimgsByCollectionId = (collectionId) => {
    return fetch (`${remoteURL}/backgrndimgs?id=${collectionId}`)
    .then(res => res.json())
}

export const getImgelementsByCollectionId = (collectionId) => {
    return fetch (`${remoteURL}/imgelements?id=${collectionId}`)
    .then(res => res.json())
}
