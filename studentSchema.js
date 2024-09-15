const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
     Rollno:{
        type:Number
     },
     Name:{
        type:String
     },
     Physic:{
        type:Number
     },
      Chemistry:{
        type:Number
     }, 
     Maths:{
        type:Number
     }


})


let student=mongoose.model("studentInfo",studentSchema);

module.exports=student;