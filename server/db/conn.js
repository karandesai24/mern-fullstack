const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://dbuser:dbuser@cluster0.nkg6k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {console.log(`sucess`);
}).catch(err=>{
console.log(err)
});