const express	= require('express');
const exhbs		= require('express-handlebars');	
const bodyParser= require('body-parser');
const DATA 		= require('./Data/resumeData.js');
const mailer 	= require('./controlers/mailer.js');
				

const PORT 	= 'PORT_NUMBER';
const app 	= express();


app.engine('handlebars', exhbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes


app.get('/contact', (req, res) => {
	// res.send(`Server is responding to the "/contact" path`);
	
	res.render('contact');
});

app.post('/contact', (req, res) =>{
	// console.log(req.body.name , req.body.email, );
	if(req.body.name !== "" && req.body.email !=="" && req.body.subject !== "")
	{
	let template = ` Recived message from ${req.body.email} and the sender introduced himself as ${req.body.name}.
	The message is as follows:
	${req.body.message}
	`;

	mailer.mailOptions.subject = mailer.mailOptions.subject + req.body.subject; 
	mailer.mailOptions.text = template; //update stuff here
	mailer.sendMail();
	mailer.defaultValues();
	res.render('thankyou', {message: 'Thank you for reaching me out.',
							response: mailer.mailResponse});	
	}
});
	


app.get('/resume', (req, res) => {
	// res.send(`Server is responding to the "/resume" path`);
	// console.log(DATA.data);
	res.render('resume', {data : DATA.data });
});

app.get('/projects', (req, res) => {
	// res.send(`Server is responding to the "/projects" path`);
	
	res.render('projects', {data : DATA.data.projects});
});

app.get('/', (req, res) => {
	// res.send(`Server is responding to the "/" path`);
	res.render('home');
});

app.get('/*', (req, res) => {
	// res.send(`Server is responding to the "/" path`);
	res.render('home');
});

//server start

app.listen(PORT, () => {
	const running = `App is running on port ${PORT}`;
	console.log(running);
});

