# Hitch

### A prototype for a peer-to-peer long-distance rideshare app

#### Capstone Project for Suncoast Developers Guild

<p align="center">
<img src="./client/src/images/hitch-gif.gif">
</p>

### See it live

https://hitch-app.herokuapp.com/

(Give Heroku a few moments to wake up. I've deployed Hitch on the free version.)

### Summary

Hitch is a prototype for a peer-to-peer long-distance rideshare app built with a React front-end and Rails back-end. The idea behind the app is that traveling between cities in the United States is hard for someone who does not own a vehicle. Public transportation is lacking. Renting a car is expensive. I saw a gap in the market for intercity travel, and I think peer-to-peer rideshares can address it. Drivers on Hitch can afford to charge a low price per seat because they're already headed in that direction anyway; think of it as a friend covering your gas money. It's hitchhiking for the 21st century!

The current prototype offers several core features: searching for a ride, booking a ride, offering a drive, displaying your rides and drives, and canceling your rides and drives. Users can search for rides based upon departure and arrival locations, dates, and times, as well as number of seats available in the vehicle and the price per seat.

I utilized Auth0 for user authentication, and offered the ability for users to sign up and log in with their Google accounts. Hitch takes and stores the users' Google profile pictures, full names, and email addresses, displaying that information automatically on their profile pages. Users can then add more information to their profiles.

I used Ruby ORMs to build an API with a postgresQL database. Instead of scaffolding, I wrote original models, controllers, and routes to manipulate user-generated data. My data is represented by three tables: People, Trips, and Rides (a junction table establishing the passengers for each trip).

I imported the library react-map-gl in order to let users choose departure and arrival locations by simply dropping a pin on a map. I stored the latitude and longitude of those pins in state, and then passed that information to my back-end through a POST request tied to a form submission. Then the latitudes and longitudes were reverse-geocoded into an address by a custom method which I wrote for the Geocoder gem.

### Project Goals

- [x] Come up with an original, unique idea for a full stack app
- [x] Wireframe the app, laying out your views statically with HTML and CSS
- [x] Add interactivity to the app using React and React Router
- [x] Build out a back end using PostgreSQL and Ruby on Rails
- [x] Add dummy data to simulate how users would be interacting with the app
- [x] Add authentication to the app using OAuth through Auth0
- [x] Add any features necessary to complete a functional MVP of the app

### Technologies Used

HTML, CSS, Javascript, React, React Router, React-Map-GL, Axios, Moment.js, Auth0, PostgreSQL, Ruby, Rails, Geocoder
