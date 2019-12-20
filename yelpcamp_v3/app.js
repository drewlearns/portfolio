const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// SCHEMA SETUP
let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

let Campground = mongoose.model("Campground", campgroundSchema);

Campground.create({
        name: "Granite Hill",
        image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
        description: "This is a huge granite hill, no bathrooms.  No water. Beautiful granite!"

    },
    (err, campground) => {
        (err ? console.log(err) : console.log("NEWLY CREATED CAMPGROUND: "));
        (err ? console.log(err) : console.log(campground));
    });

app.get("/", (req, res) => {
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
        err ? console.log(err) : res.render("index", { campgrounds: allCampgrounds });
    });
});

//CREATE - add new campground to DB
app.post("/campgrounds", (req, res) => {
    // get data from form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCampground = { name: name, image: image, description: desc }
    // Create a new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated) => {
        err ? console.log(err) : res.redirect("/campgrounds");
    });
});

//NEW - show form to create new campground
app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", (req, res) => {
    //find the campground with provided ID
    Campground.findById(req.params.id, (err, foundCampground) => {
        err ? console.log(err) : res.render("show", { campground: foundCampground });
    });
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`
   	**********************************************************
	       __                  __                          
	  ____/ /_________      __/ /___  ____ ____  __   ____
	 / __  / ___/ _ \\ | /| / / / _ \\/ __ / ___// __ \\/ ___/
	/ /_/ / /  /  __/ |/ |/ / /  __/ /_/ / /  / / / (__  ) 
	\\__,_/_/   \\___/|__/|__/_/\\___/\\__,_/_/  /_/ /_/____/
	https://DrewLearns.com | Drew@drewlearns.com

	*********************************************************
	Node/Express Server Started - Now listening on respective Port.
	`);
});
