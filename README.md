# nasa-rover

FOR MADELIN

The aim of the project is to fetch curiosity rover images from the NASA api and display them on website. 

- A sol is a day on mars

What I want it to do:
- The user inputs a sol and the nasa api fetchs the photos for that sol
- There are 3 different cameras (FHAZ, RHAZ, NAVCAM) - Each camera displays a different photo
- Other buttons include, latest sol, landing sol and the abillity to go to the next or previous day

My problem:
- At the moment I am doing 3 different fetches to get the photos from each camera. To me this seems like a very inefficient way to do this.
- Is there a way to do this in one fetch?
- I have also included a image of the fetched data called nasafetch.jpeg in the home directory

For reference: Fetching api's is as far as I have got right now. I know there are promises and possibly some otherways of using the data, but havent learnt this far if that's a solution.

LINK TO NASA API - MARS ROVER PHOTOS - https://api.nasa.gov/
