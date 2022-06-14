//My NASA Key HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew

let FHAZCam = "fhaz"

fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=800&camera=fhaz&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#FHAZImg').src = data.photos[0].img_src
        document.querySelector('#RHAZImg').src = data.photos[0].img_src

                       
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("Error! Connection interrupted through Martian interference. Please repeat message, over.")
    })
