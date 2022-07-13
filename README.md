# Curiosity Mars Rover Photo Fetcher

This is cool. You can choose a day on mars and you will receive all the photos from 3 different camera positions on the rover. You can then carousel through the images. 

![main/Screenshot from 2022-07-13 17-26-02.png](https://github.com/GreenEagleKing/nasa-rover/blob/main/Screenshot%20from%202022-07-13%2017-26-02.png)

# How It's Made:
Tech used: HTML, CSS, JavaScript, NASA API

There are 3 different cameras on the rover which all have their own object info. I began with creating a fetch request for the NAVCAM for a user choosen day using an input form. The fetched image is then put into the DOM and can move through that day s(sol) images using the arrows. Due to the way NASA's API works I have had to do 3 seperate fetch requests to gather the images from each of the cameras.

Currently once a day is inputted and images fetched you can then +1 day or -1 day using the buttons either side of the input form submit button. I have also added the abillity to pick the 1st day that Curiosity landed and the latest day images. 

# Optimizations:
I would really like to reduce the number of fetches if there is anyway around it.

I want to improve the look of the website and make it more engaging by providing more information on the images.

# Lessons Learned:
+ Successfully interacted with NASA's API
+ Accessing the API objects that I want
+ Using DOM manipulation to add images to the webpage


