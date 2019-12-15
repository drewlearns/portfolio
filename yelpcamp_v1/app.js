//DEPENDANCIES
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//SETUP
app.set("view engine", "ejs");
app.listen(4000, () => {
  console.log("Now listening on port 4000", "Yelp Camp server has started.");
});
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb+srv://drewlearns:flysuperfly@drewlearns-8lmq1.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(function (){
	console.log('Connected to DB');
}).catch(err => {
	console.log('Error: ', err.message);
});


//GLOBAL VARIABLES
let description =
  "This is a comprehensive project to cover all the the things from Colt Steele's 'The Web Developer Bootcamp from Udemy 'https://www.udemy.com/share/101W9CCUAec1xQRXg=/' This covers Javascript, Node.js, Express, MongoDB, REST APIs, Bootstrap 4, HTML5, and CSS";
let campgrounds = [
  {
    name: "Salmon Creek",
    image: "https://farm5.staticflickr.com/4191/34533125526_716102b23f_b.jpg"
  },
  {
    name: "Granite Hill",
    image: "https://live.staticflickr.com/3242/2691207959_4b6a109e42_b.jpg"
  },
  {
    name: "Mount Rushless",
    image: "https://live.staticflickr.com/6199/6050647449_b7f134f2fa_b.jpg"
  },
  {
    name: "Salmon Creek",
    image: "https://farm5.staticflickr.com/4191/34533125526_716102b23f_b.jpg"
  },
  {
    name: "Granite Hill",
    image: "https://live.staticflickr.com/3242/2691207959_4b6a109e42_b.jpg"
  },
  {
    name: "Mount Rushless",
    image: "https://live.staticflickr.com/6199/6050647449_b7f134f2fa_b.jpg"
  }
];

//ROUTES
// - ROOT
app.get("/", (req, res) => {
  console.log("you opened the landing page");
  res.render("landing");
});
// - CAMPGROUNDS
app.get("/campgrounds", (req, res) => {
  console.log("you opened the campground page");
  res.render("campgrounds", { campgrounds: campgrounds });
});
// - NEW CAMPGROUND POST REQUEST
app.post("/campgrounds", (req, res) => {
  //get data from forms and add to campgrounds array
  let name = req.body.name;
  let image = req.body.image;
  let newCamp = { name: name, image: image };
  campgrounds.push(newCamp);
  res.redirect("/campgrounds");
});
// - NEW CAMPGROUND FORM
app.get("/campgrounds/new", (req, res) => {
  console.log("you opened the campground form");
  res.render("newCampground");
});

// --CATCH ALL (REDIRECTS TO ROOT)
app.get("*", (req, res) => {
  res.redirect("/");
});
