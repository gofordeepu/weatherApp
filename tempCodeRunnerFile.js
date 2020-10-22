app.get('/',(req,res)=>{
   res.sendFile(__dirname+"/weather_report/index.html");
})