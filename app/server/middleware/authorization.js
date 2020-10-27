
function authorization(req,res,next){
    if(req.userLogin.role==='admin'){
        // console.log('ini role>>>>>>>>',req.userLogin.role)
        next()
    }
    else{
        res.status(400).json({message:'not authorized'})
        
    }
}
module.exports=authorization