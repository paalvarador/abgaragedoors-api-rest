const mongoose = require("mongoose")

mongoose
    .connect("mongodb+srv://abgarage:bRqJZTgFTvKIPhHH@cluster0.nkcsibf.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Success DB Connection to MongoDB"))
    .catch((error) => console.error(error))



