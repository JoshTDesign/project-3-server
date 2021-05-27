const jwt = require("jsonwebtoken");

const tokenAuth= (req,res,next)=>{

    if(req.headers.authorization){
        console.log("auth header")
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.JWT_SECRET,(err,data)=>{
            if(err){
                console.log(err)
                return res.status(403).json({message:"Auth failed"})
            }else {
                console.log(data);
                req.user = data;
               return next();
            }
        })
    } else {
        return res.status(403).json({message:"auth falied"})
    }
}

module.exports = tokenAuth;