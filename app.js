let express=require('express');
let app=express();
let cors=require('cors');

app.use(express());
app.use(cors());

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.raw());

const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

let stud=require('./modules/studentSchema.js');

let db={};

db.stud=stud;
db.mongoose=mongoose;
db.url='mongodb://localhost:27017/StudentData';
db.mongoose.connect(db.url)
.then(()=>{
    console.log("database connect succussfully .....");
}).catch((e)=>{
    console.log("something  is happened"+e);
})
let student=db.stud;
app.post('/addStudent',async(req,res)=>{
     let user= new student(req.body);

     try{
        await user.save();

     }catch(e){
        res.status(404).send("something fissy ..");
     }
})

app.get('/getStudent',async(req,res)=>{
    let user= await student.find();
    if(user){
        res.json(user);
    }
})

app.get('/:subject',async(req,res)=>{
    let {subject}= req.params;
    
    let user=await student.findOne().sort(`-${subject}`);
    if(user){
        res.send(user);
    }
})

app.get('/min/:subject',async(req,res)=>{
    let {subject}=req.params;
    let user =await student.findOne().sort(subject);
    if(user){
        res.send(user);
    }
})

app.delete('/record/:Rollno',async(req,res)=>{
 let {Rollno}=req.params;
   let user=await student.findOneAndDelete({Rollno:Rollno});
   if(user){
    res.send("record delete succussfully .."+user);
   }else{
    res.status(404).send("something fissy");
   }
})

app.listen(3000,(req,res)=>{
    console.log("port running 3000 successfully ...  ");
})

