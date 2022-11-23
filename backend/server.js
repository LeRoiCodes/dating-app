
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Cors from 'cors';
import CardRoutes from './routes/CardRoutes';

//App config
dotenv.config();
const app = express();
const port = process.env.PORT || 8000


//Middleware
app.use(express.json());
app.use(Cors());


//DB Config
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//API endpoints
app.use('api/v1/dating/cards', CardRoutes);
app.get("/", (req, res) => {
res.status(200).send("Hello LeRoi")
})

//Listener
app.Listen(port, () => {
    console.log(`LeRoi listening on localhost: ${port}`)
})

//install nodemon, cors