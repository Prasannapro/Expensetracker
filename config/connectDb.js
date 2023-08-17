// const mongoose = require("mongoose");
// const colors = require("colors");
// require("dotenv").config();

// const connectDb = async ()=>{
//    try{
//        await mongoose.connect(process.env.MONGO_URI,
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//        console.log(`db running on ${mongoose.connection.host}`.bgCyan.white);
//    }
//    catch(error){
//       console.log(`${error}`.bgRed);
//    }
// }

// module.exports = connectDb

const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/expensetracker",
      // "mongodb+srv://Prasanna:" +
      //   encodeURIComponent("Prasanna@2002") +
      //   "@cluster0.r4fhexl.mongodb.net/expensetracker",
    // process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`db running on ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
