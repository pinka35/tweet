const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const userschema=new Schema({
    name:
    {type:String,required:true,unique:true},
    password:
    {type:String,required:true},
   
  });
  //making a model
   var Logins=mongoose.model('Login', userschema);
 //
  
module.exports=Logins;