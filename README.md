# Curiosity Rover Image Explorer

This is cool. You can choose a day on mars and you will receive all the photos from 3 different camera positions on the rover. You can then carousel through the images. Exploring the various different landscapes from the day of landing to the current day. There is the abillity to add days to your favourites which is held in local storage for saving your favourite days on Mars. Alongside basic facts about the day and Curiosity, including an embedded 3D model of the rover which allows your to rotate and zoom around the rover.

![main/Screenshot from 2022-07-13 17-26-02.png](https://github.com/GreenEagleKing/nasa-rover/blob/main/curiosity-rover-gif)

# How It's Made:
Tech used: HTML, CSS, JavaScript, NASA API

There are 3 different cameras on the rover which all have their own object info. I began with creating a fetch request for the NAVCAM for a user choosen day using an input form. The fetched image is then put into the DOM and can move through that day's(sol) images using the arrows. Due to the way NASA's API works I have had to do 3 seperate fetch requests to gather the images from each of the cameras.

Currently once a day is inputted and images fetched you can then +1 day or -1 day using the buttons either side of the input form submit button. I have also added the abillity to pick the 1st day that Curiosity landed and the latest day images.

There is now also a embedded 3D model of Curiosity rover from the NASA website.

There is an active red/green flashing gif which runs depending upon the status of the rover which is based on data fetched from the API.

The design of the website is fully created by myself using Adobe Illustrator to create a futuristic/ HUD design. An error image is also designed by myself.

# Optimizations:
+ I would really like to reduce the number of fetches if there is anyway around it.
+ Currently the website is only opitimised for monitor/laptop screen viewing so would love to make it more accessible using CSS.
+ More info/facts of the day/rover would also benefit the user and user retention on the site.


# Lessons Learned:
+ Successfully interacted with NASA's API
+ Accessing the API objects that I want
+ Using DOM manipulation to add images to the webpage
+ Custom designed elements implemented using CSS
+ Local storage used to store favourite days


