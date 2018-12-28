const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Logins=require('./models/login');
const Tweets=require('./models/tweet');

var uname;
const url='mongodb://localhost:27017/mydatabase'

const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');

}
).listen(8081);
mongoose.connect(url,function(err)
{
    if(err) throw err;
 console.log("successfully connceted");

});
app.get('/act',(req,res)=>
{
  
  Logins.findOne({'name' :req.query.uname ,'password' :req.query.passwd},function(err,data)
       {
           uname=req.query.uname;
           if(err) throw err;
           else{
               if(data==null)
               res.send("wrong input");
               else
               res.sendFile(__dirname+"/tweet.html");
           }

      
       
      })
       })

    app.get('/iframe',function(req,res)
    {
        Tweets.find(function (err,data) {
            if (err) return console.error(err);
            else{
                    
                var  tweet="";
                for(i=0;i<data.length;i++)
                {
                tweet+=data[i].username +"," + data[i].tweet+","+ data[i].created_at+"<br>"
                }
                
                res.send(tweet);
            }

    })
})
app.get('/tweeted',function(req,res)
{
    
    var tweet=Tweets({
        username:uname,
        tweet:req.query.tweet,
        created_at:Date.now()


    })
    tweet.save(function(error) {
          console.log("Your bee has been saved!");
      if (error) {
          console.error(error);
       }

})

res.sendFile(__dirname+'/tweet.html');

})
   

    
