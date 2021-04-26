const remoteURL = "http://localhost:8088"

export const getAllCollections = () => {
    return fetch(`${remoteURL}/collections`)
        .then(result => result.json())
}

export const getCollectionById = (id) => {
    return fetch(`${remoteURL}/collections/${id}?_expand=user`)
        .then(res => res.json())
}