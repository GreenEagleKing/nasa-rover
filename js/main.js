//My NASA Key HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew

fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=800&camera=fhaz&api_key=HTn441SSfabqhV7KiFBa5KJYXERa6P5q2vZcb5ew')
    .then(res => res.json())
    .then(data => {
        console.log(data)

                       
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("Error! Connection interrupted through Martian interference. Please repeat message, over.")
    })







