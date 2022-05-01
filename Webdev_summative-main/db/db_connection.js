const mongoose = require('mongoose')
// const username = "group25";
// const password = "Thel25.";
// const cluster = "cluster0.5htut";
// const dbname = "Reddit_clone_database";
// //mongodb+srv://AbrahamDeng:Thel25.@cluster0.b7aei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongoose.connect(
//     `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
//     {
//       useNewUrlParser: true,
//       //useFindAndModify: false,
//       useUnifiedTopology: true
//     }
//   );
// const db=mongoose.connection
// db.on('error',(error) => console.error(error))
// db.once('open',()=>console.log('Connected Successfully'))
const connectdb = async ()  => {
  try {
    await mongoose.connect("mongodb+srv://AbrahamDeng:aruahideng@cluster0.b7aei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      socketTimeoutMS: 75000,
    });
    console.log("Connected Successfully")
  } catch (error) {
    console.error(error)
  }
}


module.exports=connectdb
