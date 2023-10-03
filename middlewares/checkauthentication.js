const jwt = require("jsonwebtoken");
const { TEACHER, LEARNER } = require("../constants/role");

const checkAuthenctication = (req,res,next)=>{
    if(req.headers.authorization){
      let token = req.headers.authorization.split(" ")[1]
      // console.log(token);
  
      if(token){
  
          try{
  
              var decoded_user_info = jwt.verify(token, process.env.JWT_SECRET);
              req.user = decoded_user_info
              return next()
          }catch(err){
            
          }
      }
  
    }  
  
      
      res.status(401).send({msg:"unauthenticated"})
      
      
      // let logged = false;
      // if(logged){
      //     next()
      // }else{
      //     res.status(401).send({msg:"unauthenticated"})
      // }
  
  
      //req.headers.authorization.split(" ")[1] = yesle chai headers maa bearer garayera rakheko tokens lai call garxa..tara token sngai bearer pani aauxa so split function use garxam
      //split function maa chai bich maa space vako thau bata tukra pardinxa..like bearer_ijsiis(token)...(" ")space le split garne...[1]index 1 maa vako
  
  }

  const isTeacher = (req,res,next) => {
    if(req.user.role === TEACHER){
        next()
    }else{
        return res.status(403).send({msg:"access denied -only for Teacher"})
    }
  }
  const isLearner = (req,res,next) => {
    if(req.user.role === LEARNER){
        next()
    }else{
        return res.status(403).send({msg:"access denied -only for Learner"})
    }
  }

  module.exports = {
    checkAuthenctication,
    isTeacher,
    isLearner
  }
  
  