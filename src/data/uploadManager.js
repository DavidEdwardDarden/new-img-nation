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