const express = require('express');
const app = express();
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
const AuthRoute = require('./routes/Auth')
const ProductRoute = require('./routes/product')
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const dotenv = require('dotenv');
const stripeRoute = require("./routes/stripe");
const cors = require('cors');
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("connection successfull"))
.catch((err) => {
    console.log(err)
}) 
app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRoute);
app.use("/api/users", userRoute);
app.use("/api/products", ProductRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend is running")
})



