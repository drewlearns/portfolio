//APP CONFIG
const express = require("express"),
    app = express(),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")
//MONGOOSE SETUP
mongoose.connect("mongodb://localhost/restful-blog-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//BODY-PARSER (BOILERPLATE)
app.use(bodyParser.urlencoded({ extended: true }));
//MAKES IT SO I DON'T NEED TO TYPE .ejs IN THE PATH WITHIN APP.JS
app.set("view engine", "ejs");
//SERVES CUSTOM STYLES SHEET
app.use(express.static('public'));
// METHOD OVERRIDE ALLOWS PUT OVERRIDES IN POST REQUESTS EJS FILES
app.use(methodOverride.("_method"));
//CUSTOM CONNECTION READOUT
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
    `)
});

//MONGOOSE MODEL CONFIG
let blogSchema = new mongoose.Schema({
    title: String,
    image: {
            type: String,
            default: 'https://drewlearns.com/wp-content/uploads/2019/12/Image-2019-12-14-at-01.25.20.png'
            },
    body: String,
    create: {
            type: Date,
            default: Date.now()
            },
    description: String
});
let Blog = mongoose.model("Blog", blogSchema);

//RESTFUL ROUTES (CRUD) -- (create, read, update, delete)
// - CREATE
    // --"NEW" ROUTE
app.get('/blogs/new', (req, res) => {
    res.render('new');
});
    // -- CREATE BLOG ROUTE
app.post('/blogs', (req, res) => {
        res.render('new');
        // -- REDIRECT NEW POST BACK TO INDEX
    Blog.create( req.body.blog, (err, newBlog) => {
        err ? (res.render('/new')) : (res.redirect('/blogs', {blog : newBlog}));
    });
    });
// - SHOW
app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        err ? (res.redirect('/blogs')) : (res.render('show', {blog : foundBlog}))
    ;})
});
// - READ
app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs, description) => {
        err ? console.log('ERROR!') : res.render('index', {blogs : blogs});
    })
})

// - UPDATE
app.put('/blogs/:id', (req, res) =>{
    Blog.findByIdAndUpdate(req.params.id, req, params.blog, (err, foundblog) => {
        err ? (res.redirect('/blogs/'${req.params.id})) : (res.render('edit', {blog : foundBlog}))
    })
    res.render('/blog/:id');
});
// - EDIT
app.get('/blogs/:id', (res, req) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        err ? (res.redirect('/blogs')) : (res.render('edit', {blog : foundBlog}))
});
    res.render('edit');
});
// - DELETE



// REDIRECTS
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

//**************************************************************************************************
// RESTFUL BLOGS COMMENTED OUT - FOR TESTING PURPOSES ONLY
// Blog.create({
//     title: 'Gothic church',
//     image: 'https://commons.wikimedia.org/wiki/File:Wien_Deutschordenskirche_Innenraum_01.jpg',
//     body: `

//     This Gothic church was built in the 14th century (1326–1375) and consecrated to St. Elisabeth of Hungary. Some of the stucco work was performed by the Italian artists Simone Allio in 1697 and Girolamo Alfieri in 1700. The church was remodelled in Baroque style in 1720 (probably) by the architect Anton Erhard Martinelli, while Count Guido von Starhemberg was the commander of the Order. Alfieri worked again in this church in the period 1720–1725, as well as the sculptor Giovanni Antonio Canevale. However, the church has retained some of its Gothic origins, such as pointed arches in the windows.

//     The walls are decorated with rows of numerous armorial bearings of the Order of Teutonic Knights and several commemorative stones, such as the tombstone of Count Siegfried Sarau with relief work by Giovanni Stanetti and of bailiff Jobst von Wetzhausen (1524) by Loy Hering.

//     Of particular interest is the Flemish winged triptych, a polychromed altarpiece from 1520. The woodcarver and the painter are unknown. The polychromy was made and signed by Jan van Wavere, a polychromer from Mechelen.[4] It depicts in vivid woodcarvings scenes from the Passion of Christ.`
// });
// console.log('Be sure to comment out THIS SECTION from app.js to avoid duplicated db entries!')
//**************************************************************************************************