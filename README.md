# Cab System

_Create a web application for a cab system where users can enter the source and destination and they will be provided with the shortest time and estimated cost.
Requirements:_

- The system should be able to manage cab booking.
- The below provided is the time taken between different destinations. For e.g. from A to B the time taken is 5 min, similarly from D to F the time taken is 20 min. 
- The user should be able to book a cab by providing the user's email, source, and destination
- The system should be able to calculate the shortest possible time from source to destination. E.g. There are multiple ways from A to D, but the shortest route will be via C.
- There are a total of 5 cabs with different pricing. (Price/minute)
○No cab should have an overlapping start and end time.
- The system should provide the estimated cost depending on the cab chosen and the time taken to reach the destination.
- The system should be able to track the cab booking.
- Users should be able to view and edit the cabs and their pricing.
Note:
- No need to develop login/signup pages, just make an assumption that only admins will be accessing it and just try to cover the basic requirements part with this assumption.
- Create your app’s frontend as a SPA.
- Create a proper ReadME file describing the functioning of your project.

Good to have:
- Responsive design.
- The system should be able to send email notifications to the user's email id at the time of booking.
# Installing the web application on your system

Make sure you have NodeJS LTS version installed on your system before proceeding

1. Clone this repo on your local machine.

```
git clone https://github.com/HarshJindal36/scaler-assignment
cd scaler-assignment
```

2. Install the required packages

```
npm i
```

3. Run the application after packages are installed.

```
npm run dev
```

## A live deployment of the webapp can be accessed <a href="https://harsh-scaler.vercel.app/" target="_blank">here</a>

# Procedure to be followed to use the application

1. Select source from dropdown where all avaliable cabs are in list.
2. Select distination from dropdown.
3. Enter Email Address. (Email Check)
4. If path is valid then only Book Cab option will appear otherwise no routes available.
5. After booking of cab it will show the book details with estimated cost and time as per shortest path.
6. In same pop up confim booking option is avialble.
7. Once you confirm the booking the alert message is generated of booking confirmation along with booking details displayed.



# Screenshots

<div align="center">
  
<img src="https://raw.githubusercontent.com/HarshJindal36/scaler-assignment/main/After%20Booking.png"></img>
<p>After Booking </p><br/><br/>
<img src="https://raw.githubusercontent.com/HarshJindal36/scaler-assignment/main/Full%20View.png"></img>
<p>Full View </p><br/><br/>
<img src="https://raw.githubusercontent.com/HarshJindal36/scaler-assignment/main/Input.png"></img>
<p>Input </p><br/><br/>
<img src="https://raw.githubusercontent.com/HarshJindal36/scaler-assignment/main/Test%20Case-1.png"></img>
<p>Test Case-1 </p><br/><br/>
<img src="https://raw.githubusercontent.com/HarshJindal36/scaler-assignment/main/Test%20Case-2.png"></img>
<p>Test Case-2 </p><br/><br/>
<img src="https://raw.githubusercontent.com/HarshJindal36/scaler-assignment/main/Result.png"></img>
<p> Result </p><br/><br/>
</div>
