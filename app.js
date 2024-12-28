const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://ephrims5:CLWcAzeVXvxwuiRm@cluster0.kfdwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('database connected successfully'))
.catch(e=> console.log(e));
//
//mongodb+srv://ephrims5:CLWcAzeVXvxwuiRm@cluster0.kfdwj.mongodb.net/

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: {type: Date, default: Date.now}
});

//create user module
const User = mongoose.model('User', userSchema);

async function runQueryExamples(){
  try{
    //create a new document
    const newUser = await User.create({
      name: 'Samuel',
      email: 'ephrims@gmail.com',
      age: 35,
      isActive: true,
      tags: ['Developer', 'Designer']
  });

  console.log('Created new user', newUser);

  }catch(e){
    console.log('Error ->', e)
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();