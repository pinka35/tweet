const mongoose=require('mongoose');
const Schema = mongoose.Schema;



const tweetSchema=new Schema({
   
   username:{type:String },
   tweet:{type:String},
   created_at:Date
  });
  var Tweets=mongoose.model('Tweet', tweetSchema);
  
  module.exports=Tweets;