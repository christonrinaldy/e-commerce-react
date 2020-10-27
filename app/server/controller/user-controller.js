const {user}=require('../models')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

class Controller{
    static async login(req,res,next){

        try{
            console.log('ini emailll>>>>>>',req.body.email)
            const userData = await user.findOne({
                                            where:{
                                                email:req.body.email,
                                            }
                                        })
            if(!userData){
                console.log('not found')
                res.status(500).json('not found')
                // next({errorCode:'NOT_FOUND', message:`USER DOESN'T EXIST`})
            }
            else{
                //console.log(userData)
                    const verified=  bcrypt.compareSync(req.body.password,userData.password)
                    if(verified){

                    const token=jwt.sign({id:userData.id,email:userData.email,role:userData.role},'secret')
                    res.status(200).json({email:userData.email,token:token})
                    console.log('verified>>>')
                    }
                    else{
                        res.status(401).json({massage:'Password is Incorrect'})
                    }

                }
        }catch(err){
            console.log(err)
            res.status(500).json({msg:'Error'})

        }
    }
}
module.exports=Controller