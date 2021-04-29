const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://admin:BVQVVy4zuozuTAxI@cluster0.z1aog.mongodb.net/SportShop",{
        useNewUrlParser: true,
        useUnifiedTopology: true })
        .then(
    () => console.log('Connected To MondogDB')
)