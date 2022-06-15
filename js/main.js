//My NASA Key HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew

document.querySelector('#pickSol').addEventListener('click', () => {
    getFHAZ()
})

function getFHAZ() {

let solNum = document.querySelector('#solPick').value

let nasaFHAZURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solNum}&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew`

fetch(nasaFHAZURL)
    .then(res => res.json())
    .then(data => {
        const {
            sol,
            ...solData
        } = data
        const temp = Object.entries(solData).map(([sol, data]) => {
            return {
                sol: sol,
                cameraName: data.camera,
                rovImg: data.img_src
            }
        })
        console.log(temp)
        document.querySelector('#FHAZImg').src = data.photos[0].img_src
       
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("Error! Martian interference. Please repeat message, over.")
    })

}