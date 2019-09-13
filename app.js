var express = require("express");
var app = new express();
var port = 3000;
//routing using router
/*
var articlesRouter=express.Router();
var projectsRouter=express.Router();
var booksRouter=express.Router();
var contactRouter=express.Router();

//Defining Routes
articlesRouter.route("/")
  .get(function(req, res){
    res.render('articles', {
            title:'Articles',
            menu:navMenu
        });
  });
projectsRouter.route("/")
  .get(function(req,res){
    res.render('projects', {
        title:'Projects',
        menu:navMenu
    });
});

booksRouter.route("/")
.get(function(req,res){
        res.render('books', {
            title:'Books',
            menu:navMenu
        });
    });

contactRouter.route("/")
.get(function(req,res){
       res.render('contact', {
           title:'Contact Us',
           menu:navMenu
       });
   });

   //Navigation Menu
   var navMenu=[
                   {
                       href:'/articles',
                       text:'Articles'
                   },
                   {
                       href:'/projects',
                       text:'Projects'
                   },
                   {
                       href:'/books',
                       text:'Books'
                   },
                   {
                       href:'/Contact',
                       text:'Contact Us'
                   },
               ];
*/
var articlesRouter=require('./src/routes/articlesRoute');
var projectsRouter=require('./src/routes/projectsRoute');
var booksRouter=require('./src/routes/booksRoute');
var contactRouter=require('./src/routes/contactRoutes');

app.use('/articles',articlesRouter);
app.use('/projects', projectsRouter);
app.use('/books', booksRouter);
app.use('/contact', contactRouter);

//Following function is starting socket and start listen from particular port.
app.listen(port, function(err){
  if(typeof(err) == "undefined"){
    console.log("Your application is running on:" + port + "port");
  }
});

//app.use(express.static('public'));

app.use(express.static('public')); //making public directory as static diectory

/* Start - This part is exclusive for bootstrap
//app.use(express.static('src/views')); //making public directory as static diectory
End - Bootstarp*/

//This section is used for EJS Template Enginer

app.set('views', './src/views'); //app.use(express.static('src/views'));
app.set('view engine', 'ejs');
/*app.get('/', function(req, res) {
    res.render('index', {
        title: 'Web Application using Node.js',
        heading: 'Hello C# Corner, Welcome to Node.js Tutorial',
        foodItems: ['Pizza', 'Burger', 'Pasta']
    });
});*/

app.get('/',function(req,res){
    res.render('index', {
        title:'Node.js By Sourabh Somani',
        menu:[
            {
                href:'/articles',
                text:'Article'
            },
            {
                href:'/projects',
                text:'Projects'
            },
            {
                href:'/books',
                text:'books'
            },
            {
                href:'/contact',
                text:'Contact Us'
            },
        ]
    });
});

app.get('/', function(req, res){
  res.send('<h1>Hello C# Corner.</h1>');
});

app.get('/articles', function(req, res){
  res.send('<h1>Welcome to C# Corner Articles.</h1>');
});
