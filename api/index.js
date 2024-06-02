const express = require('express')
const User = require('./models/User')
const movie = require('./models/Movielist')
const jwt = require('jsonwebtoken')

const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const app = express();
app.use(cors({
    credentials: true, 
    origin:  'https://movie-frontend-self.vercel.app/'
}))  
app.use(express.json())
console.log(process.env.MONGO_URL)
const mongourl = process.env.MONGO_URL
const jwtsecret = process.env.JWT_KEY;

mongoose.connect(mongourl)
app.get('/', (req,res)=>{
    res.json('test ok');
})
  
app.post('/register', async(req,res) => {
    console.log('gg')
    const {username,password} = req.body;
    
    try {
        const newUser = await User.create({ username, password });
        res.status(201).json({ message: 'User created successfully', user: newUser._id });
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error });
      }
})

app.post('/login', async (req,res) => {
    const {username,password} = req.body;
    console.log(username)
    const users = await User.find({
      username:{$in:[username]},
      password:{$in:[password]},
    }).sort({createdAt: 1});
    
    res.json(users);

})
app.post('/save', async (req,res) => {
    const {imdb,userId} = req.body;
    console.log(req.body)
    try {
        const newm = await movie.create({author:userId,imdb:imdb});
        res.status(201).json({ message: ' created successfully' });
        console.log("saved movie", userId, imdb);
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating ', error });
      }
    

})
app.post('/movies', async (req,res) => {
    const {id} = req.body;
    console.log("requested for playlist \n")
    console.log(req.body)
    
    try {
        const movies = await movie.find({
            author:{$in:[id]},
          }).sort({createdAt: 1});
          console.log(movies);
          res.json(movies);
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating ', error });
      }
    

})

app.listen(4000);
