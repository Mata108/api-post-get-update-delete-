const UserModal=require("../models/user.js")
const positionModal=require("../models/position.js")
const bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')

class positioncontroller{
      static getdata=async(req,res)=>{
          try{
              res.send("Hello ji")
          }catch(error){
            console.log(error)
          }
      }
      static datainsert=async(req,res)=>{
          try{
               
       const{id}=req.data1
       const{name,email,mobile_no,salary,city,country,department,role}= req.body
       const user =await UserModal.findOne({email:email})
       if(user){
         res.status(401).json({ status: "failed", message: "ᴛʜɪꜱ ᴇᴍᴀɪʟ ɪꜱ ᴀʟʀᴇᴀᴅʏ ᴇxɪᴛꜱ" });
       }else{
        if(name&&email&&mobile_no&&salary&&city&&country&&department&&role ){
          
              const datauser = new positionModal({
                 name:name,
                 email:email,
                 mobile_no:mobile_no,
                 salary:salary,
                 city:city,
                 country:country,
                 department:department,
                 role:role,
                 user_id:id

              })
              await  datauser.save();
              res.status(401).json({ status: "success", message: "Successfully your Registration" });
            
        }else{
         
            res.status(401).json({ status: "failed", message: "all fields are required" });
           // res.redirect('./registration')
        }
       }
       
          }catch(error){
            console.log(error)
          }
      }

      static positionview=async(req,res)=>{
        try{
       const{id}=req.data1
        const data = await positionModal.findOne({user_id:id});
        // console.log(data)
        let t={
          'name':data.name,
          'email':data.email,
          'Phone_no':data.mobile_no,
          'salary':data.salary,
            'city':data.city,
            'country':data.country,
            'department':data.department,
            'role':data.role
        }
        res.send(t)

        }catch(error){
          console.log(error)
        }
      }
      static updateposition=async(req,res)=>{
        try{
       const{id}=req.data1
       const{name,email,mobile_no,salary,city,country,department,role}= req.body
        // console.log(data)
        var datauser = {
          name:name,
          email:email,
          mobile_no:mobile_no,
          salary:salary,
          city:city,
          country:country,
          department:department,
          role:role,
          

       }
       res
   .status(401)
   .json({ status: "success", message: "succesful" });
   const updateposition=await positionModal.findOneAndUpdate({user_id:id},datauser)
  //  console.log(updateposition)
        }catch(error){
          console.log(error)
        }
      }
      
      static deleteposition=async(req,res)=>{
        try{
          const positionDelete = await positionModal.findById(req.params.id)
          // console.log(userDelete)
          // console.log(req.params.id)
        if (!positionDelete) {
          return res
            .status(500)
            .json({ status: '500', message: 'user not !! found  😪  ' })
        }
   // To delete the data from database
        await positionModal.deleteOne(positionDelete)
   
        res.status(200).json({
          status: 'deleted successfully',
          message: '  Successfully  deleted 🥂🍻',
        })
           
        }catch(error){
          console.log(error)
        }
      }
}




module.exports=positioncontroller