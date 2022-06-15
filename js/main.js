//My NASA Key HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew

document.querySelector('#pickSol').addEventListener('click', () => {
    getFHAZ()
    getRHAZ()
    getNAVCAM()
})

document.querySelector('#firstSol').addEventListener('click', () => {
    getFHAZ()
    getRHAZ()
    getNAVCAM()
})


function getFHAZ() {

let sol = document.querySelector('#solPick').value

let nasaFHAZURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=fhaz&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`

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

function getRHAZ() {

let sol = document.querySelector('#solPick').value


let nasaRHAZURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=rhaz&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`

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

function getNAVCAM() {

let sol = document.querySelector('#solPick').value
    
    
let nasaRHAZURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=navcam&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`
    
    fetch(nasaRHAZURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.photos[0].camera)
            document.querySelector('#NAVCAMImg').src = data.photos[0].img_src
            
        })
        .catch(err => {
            console.log(`error ${err}`)
            alert("Error! Martian interference. Please repeat message, over.")
        })
}

// Landing Sol
// request sol 0
// update images/ data