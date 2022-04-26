/**
 * Author:    Diego
 * Created:   04.26.2022
 *
 * (c) Copyright by Blub Corp.
 **/
 myTransport = [
   "Biking",
   "Driving",
   "Walking",
   "Bus"
 ];

 myMainRide = {
   make: "Honda",
   model:"Civic",
   color: "Gray",
   year: 2020,
   age: 3,
   }


 document.writeln("Getting around: " + myTransport + "<br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
