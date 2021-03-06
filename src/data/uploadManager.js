const remoteURL = "http://localhost:8088"

export const getBackgrndimgsByBackgrndimgId = (backgrndimgId) => {
    return fetch (`${remoteURL}/backgrndimgs?id=${backgrndimgId}`)
    .then(res => res.json())
}


export const getAllBackgrndimgs = () => {
    return fetch (`${remoteURL}/backgrndimgs?_expand=user`)
    .then(res => res.json())
}


// export const deleteCollection = (id) => {
//     return fetch(`${remoteURL}/collections/${id}`, {
//         method: "DELETE"
//     }).then(result => result.json())
// }

export const addBackgrndimgs = (newimage) => {
    return fetch(`${remoteURL}/backgrndimgs/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newimage)
    }).then(response => response.json())
}

export const addImgElements = (newimage) => {
    return fetch(`${remoteURL}/imgelements/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newimage)
    }).then(response => response.json())
}

export const addCollectionImg = (newimage) => {
    return fetch(`${remoteURL}/collections/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newimage)
    }).then(response => response.json())
}

export const addCollection = (newCollection) => {
    return fetch(`${remoteURL}/collections`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCollection)
    }).then(response => response.json())
}

