const express = require('express');
const cors = require('cors');
const categoryRoute = require('./Routes/categoryRoutes');
const productsRoute= require('./Routes/productRoutes');
const orderRoute= require('./Routes/orderRoutes');
const userRoute= require('./Routes/userRoutes');
const postRoute= require('./Routes/postRoutes');
const gendersRoute = require('./Routes/gendersRoutes');


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/cat', categoryRoute);
app.use('/gender',gendersRoute);
app.use('/product',productsRoute);
app.use('/order',orderRoute);
app.use('/user',userRoute);
app.use('/post',postRoute);






app.listen(3000, () => console.log('server is runing..'))