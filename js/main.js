//My NASA Key HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew

document.querySelector('#pickSol').addEventListener('click', () => {
    let sol = document.querySelector('#solPick').value
    getFHAZ(sol)
    getRHAZ(sol)
    getNAVCAM(sol)
})


function getFHAZ(solInput) {

let nasaFHAZURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solInput}&camera=fhaz&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`

fetch(nasaFHAZURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#FHAZImg').src = data.photos[0].img_src
       
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("Error! Martian interference. Please repeat message, over.")
    })

}

function getRHAZ(solInput) {

let nasaRHAZURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solInput}&camera=rhaz&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`

fetch(nasaRHAZURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#RHAZImg').src = data.photos[0].img_src
        
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("Error! Martian interference. Please repeat message, over.")
    })

}

function getNAVCAM(solInput) {    
    
let nasaNavcamURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solInput}&camera=navcam&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`
    
    fetch(nasaNavcamURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#NAVCAMImg').src = data.photos[0].img_src
            
        })
        .catch(err => {
            console.log(`error ${err}`)
            alert("Error! Martian interference. Please repeat message, over.")
        })
}

function getManifest() {    
    
    let nasaManifestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/?api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`
        
        fetch(nasaManifestURL)
            .then(res => res.json())
            .then(data => {
                let maxSol = data.rover.max_sol
                return maxSol
            })
            .catch(err => {
                console.log(`error ${err}`)
                alert("Error! Martian interference. Please repeat message, over.")
            })
}
