import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import 'dotenv/config' 


const app = express();
const PORT = 5000;


app.use(bodyParser.json());

// Connecting to mongo with the url stored in environment variables
mongoose.connect(process.env.DATABASE)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connected to database'))

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
