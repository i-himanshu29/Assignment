import express from "express";
import cors from "cors";
import axios from 'axios'
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import 'dotenv/config.js'
const locationRoutes = require('./routes/LocationRoute.js');

 //app config
 const app = express()
 const port = process.env.PORT || 4000

 // middleware 
 app.use(express.json())
 app.use(cors())

 //DB connection
 connectDB();
//  const router = express.Router();

//  router.post('/get-coordinates', async (req, res) => {
//    const { address } = req.body;
//    try {
//      const response = await axios.get(
//        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//          address

//      )}&key=YOUR_GOOGLE_MAPS_API_KEY`
//     //    )}&key=AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU`
//      );
//      res.json(response.data.results[0].geometry.location);
//    } catch (error) {
//      res.status(500).send('Error fetching coordinates');
//    }
//  });
//  module.exports = router;


//  const fetchCoordinates = async (address) => {
//     try {
//       const response = await axios.post('http://localhost:5000/get-coordinates', { address });
//       return response.data; // { lat, lng }
//     } catch (error) {
//       console.error(error);
//     }
//  };
 
//  

 //api endpoints
 app.use('/api/food',foodRouter)
 app.use('/images',express.static('uploads'))
 app.use('/api/user',userRouter)
 app.use("/api/cart",cartRouter)
 app.use("/api/order",orderRouter)
 
app.use('/api/location', locationRoutes);


 app.get("/",(req,res)=>{
    res.send("API Working")
 })

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})
