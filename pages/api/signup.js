
import connectDb from "../../middelware/mongoose";
import User from "../../models/User";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => 
{
    if (req.method == 'POST'){
        console.log(req.body)
        const {name, email}=req.body
        let u=new User({name, email, password: CryptoJS.AES.encrypt(req.body.password, 'secret123').toString()})
        
       await u.save()
        res.status(200).json({ success:"success" })
    }
    else {
        res.status(400).json({ error: "This method is invalid" })
    }
}

export default connectDb(handler);