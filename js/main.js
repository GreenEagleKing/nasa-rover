//My NASA Key HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew

document.querySelector('#pickSol').addEventListener('click', () => {
    let sol = document.querySelector('#solPick').value
    getFHAZ(sol)
    getRHAZ(sol)
    getNAVCAM(sol)
})

// Click counter for sol's
let count = 0

// Minus a sol images
document.querySelector('#minusSol').addEventListener('click', () => {
    let sol = Number(document.querySelector('#solPick').value) + --count
    getFHAZ(sol)
    getRHAZ(sol)
    getNAVCAM(sol)
    return count    
})

// Plus a sol images
document.querySelector('#plusSol').addEventListener('click', () => {
    let sol = Number(document.querySelector('#solPick').value) + ++count
    getFHAZ(sol)
    getRHAZ(sol)
    getNAVCAM(sol)
    return count
    
})

// Landing Sol images
document.querySelector('#firstSol').addEventListener('click', () => {
    let sol = 0
    getFHAZ(sol)
    getRHAZ(sol)
    getNAVCAM(sol)
})

// Fetch FHAZ camera image
function getFHAZ(solInput) {

let nasaFHAZURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solInput}&camera=fhaz&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`

fetch(nasaFHAZURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#FHAZImg').src = data.photos[0].img_src
        fhazCount = 0
        document.querySelector('#fhazArrowNext').addEventListener('click', () => {
            if (fhazCount === data.photos.length -1) {
                document.querySelector('#FHAZImg').src = data.photos[0].img_src
                return fhazCount = 0
            } else {
                ++fhazCount
                document.querySelector('#FHAZImg').src = data.photos[fhazCount].img_src
                return fhazCount
            }
        })
        document.querySelector('#fhazArrowPrevious').addEventListener('click', () => {
            if (fhazCount <= 0) {
                document.querySelector('#FHAZImg').src = data.photos[0].img_src
                return fhazCount = 0
            } else {
                fhazCount--
                document.querySelector('#FHAZImg').src = data.photos[fhazCount].img_src
                return fhazCount
            }
        })
       
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("Error! Martian interference. Please repeat message, over.")
    })

}

// Fetch RHAZ camera image
function getRHAZ(solInput) {

let nasaRHAZURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solInput}&camera=rhaz&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`

fetch(nasaRHAZURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#RHAZImg').src = data.photos[0].img_src
        rhazCount = 0
        document.querySelector('#rhazArrowNext').addEventListener('click', () => {
            if (rhazCount === data.photos.length -1) {
                document.querySelector('#RHAZImg').src = data.photos[0].img_src
                return rhazCount = 0
            } else {
                ++rhazCount
                document.querySelector('#RHAZImg').src = data.photos[rhazCount].img_src
                return rhazCount
            }
        })
        document.querySelector('#rhazArrowPrevious').addEventListener('click', () => {
            if (rhazCount <= 0) {
                document.querySelector('#RHAZImg').src = data.photos[0].img_src
                return rhazCount = 0
            } else {
                rhazCount--
                document.querySelector('#RHAZImg').src = data.photos[rhazCount].img_src
                return rhazCount
            }
        })
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("Error! Martian interference. Please repeat message, over.")
    })

}

// Fetch NAVCAM camera image
function getNAVCAM(solInput) {    
    
let nasaNavcamURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solInput}&camera=navcam&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`
    
    fetch(nasaNavcamURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#NAVCAMImg').src = data.photos[0].img_src
            navCount = 0
        document.querySelector('#navArrowNext').addEventListener('click', () => {
            if (navCount === data.photos.length -1) {
                document.querySelector('#NAVCAMImg').src = data.photos[0].img_src
                return navCount = 0
            } else {
                ++navCount
                document.querySelector('#NAVCAMImg').src = data.photos[navCount].img_src
                return navCount
            }
        })
        document.querySelector('#navArrowPrevious').addEventListener('click', () => {
            if (navCount <= 0) {
                document.querySelector('#NAVCAMImg').src = data.photos[0].img_src
                return navCount = 0
            } else {
                navCount--
                document.querySelector('#NAVCAMImg').src = data.photos[navCount].img_src
                return navCount
            }
        })
        })
        .catch(err => {
            console.log(`error ${err}`)
            alert("Error! Martian interference. Please repeat message, over.")
        })
}


    
let nasaManifestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/?api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`
    
    fetch(nasaManifestURL)
        .then(res => res.json())
        .then(data => {
            let maxSol = data.rover.max_sol
         
            // Fetch latest sol images on click
            document.querySelector('#latestSol').addEventListener('click', () => {
                getFHAZ(maxSol)
                getRHAZ(maxSol)
                getNAVCAM(maxSol)
            })
        

        })
        .catch(err => {
            console.log(`error ${err}`)
            alert("Error! Martian interference. Please repeat message, over.")
        })
