//My NASA Key HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew

// On page load fetch current sol images/info
getManifest()
checkFavs()
let favArray = checkFavs()

document.querySelector('#pickSol').addEventListener('click', () => {
    let sol = document.querySelector('#solPick').value
    getFHAZ(sol)
    getRHAZ(sol)
    getNAVCAM(sol)
    document.getElementById("currentDate").textContent = `Sol's since launch: ${sol}`
})

document.querySelector('#favBtn').addEventListener('click', () => {
    addToFavs(favArray)
})

document.querySelector('#clearFav').addEventListener('click', () => {
    clearFavs()
    favArray = []
})

// Click counter for sol's
let count = 0

// Minus a sol images
document.querySelector('#minusSol').addEventListener('click', () => {
    let sol = Number(document.querySelector('#solPick').value) + --count
    getFHAZ(sol)
    getRHAZ(sol)
    getNAVCAM(sol)
    document.getElementById("currentDate").textContent = `${sol}`
    return count    
})

// Plus a sol images
document.querySelector('#plusSol').addEventListener('click', () => {
    let sol = Number(document.querySelector('#solPick').value) + ++count
    getFHAZ(sol)
    getRHAZ(sol)
    getNAVCAM(sol)
    document.getElementById("currentDate").textContent = `Sol's since launch: ${sol}`
    return count
    
})

// Latest sol images
function latestSol(todaySol) {
    if (document.readyState === 'complete') {
        getFHAZ(todaySol)
        getRHAZ(todaySol)
        getNAVCAM(todaySol)
        document.getElementById("currentDate").textContent = `Sol's since launch: ${todaySol}`
    } else {
    document.querySelector('#latestSol').addEventListener('click', () => {
        getFHAZ(todaySol)
        getRHAZ(todaySol)
        getNAVCAM(todaySol)
        document.getElementById("currentDate").textContent = `Sol's since launch: ${todaySol}`
    })}
}

// Landing Sol images
document.querySelector('#firstSol').addEventListener('click', () => {
    let sol = 0
    getFHAZ(sol)
    getRHAZ(sol)
    getNAVCAM(sol)
    document.getElementById("currentDate").textContent = sol
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
        const imgError = document.querySelector('#FHAZImg').src = './img/Error\ Image.png'
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
        const imgError = document.querySelector('#RHAZImg').src = './img/Error\ Image.png'
    })

}

// Fetch NAVCAM camera image
function getNAVCAM(solInput) {    
    555
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
            const imgError = document.querySelector('#NAVCAMImg').src = './img/Error\ Image.png'
        })
}


function getManifest() {

// Fetch info for that Sol and run latest sol function    
let nasaManifestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/?api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`
    
    fetch(nasaManifestURL)
        .then(res => res.json())
        .then(data => {
            let maxSol = data.rover.max_sol
            let launch = data.rover.launch_date
            let landing = data.rover.landing_date
            let status = data.rover.status
            latestSol(maxSol)
            getInfo(maxSol, launch, landing, status)
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
            alert("Error! Martian interference. Please repeat message, over.")
})
}

// Fetches sol info and puts it into the info section 
function getInfo(maxSol, launch, landing, status) {
    document.getElementById("launchDate").textContent = launch
    document.getElementById("landingDate").textContent = landing
    document.getElementById("currentDate").textContent = maxSol

    //Green light gif for active and red for anything else
    document.getElementById("status").textContent = status.toUpperCase()
    if (status !== "active") {
       const light = document.querySelector('.light')
        light.src = "https://giphy.com/embed/cl7sAq7d8IrihKOaW1"
        light.style.borderColor = "rgb(71, 24, 24)"
    }
}

// Add sol to favourites button (add to local storage) and put into DOM

function checkFavs(){
    if (localStorage.getItem('fav1') === null) {
        const favArr = []
        return favArr
    } else {
        getFavLocal()
        const favArr = getFavLocal()
        return favArr
    }
}

function addToFavs(array) {
    let solInput = document.querySelector('#solPick').value
    array.push(solInput.toString())
    localStorage.setItem('fav1', JSON.stringify(array))
    getFavLocal()
    }

function getFavLocal() {
    let getFav = JSON.parse(localStorage.getItem('fav1'))
    document.querySelector('#favList').textContent = getFav
    return getFav
}

function clearFavs() {
    localStorage.clear()
    document.querySelector('#favList').textContent = "No favourites selected"
}