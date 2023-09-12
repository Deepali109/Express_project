const express = require('express');
const path = require('path');
const app = express();
const hbs= require('hbs');
const port = process.env.PORT || 3000;

// public static path 
const static_path = path.join(__dirname, "/public/js");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set ('view engine', 'hbs');      // setting handlebars
app.set ('views',template_path)    //tells that the default folder views is in the tempplate path and set template as default folder
hbs.registerPartials(partials_path);  // we are rehistering partials once registered we can use it anywhwere

app.use(express.static(static_path));



//  routing
app.get("/home", (req, res)=>{
    res.render('index');
})

app.get("/about", (req,res)=>{
    res.render('about');

})

app.get("/weather", (req, res)=>{
    res.render("weather");

})

app.get("*", (req, res)=>{
    res.render("404error", {
        errorMsg: 'Opps! Page Not Found. Please go back'  
    });// here as u see we can also pass objects.
})

app.listen(port , () =>{
    console.log(`listening to the port at ${port}`)
})



// nodemon src/app.js -e js.hbs 
// it is used to save the changes in both js and hbs files.