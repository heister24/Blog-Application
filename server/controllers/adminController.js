import jwt from "jsonwebtoken";


export const adminLogin = async(req, res) =>{
    try {
        const {email, password} = req.body;

        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASS){
            return res.status(400).json({message:'Authentication failed'})
        }

        const token = jwt.sign({email},process.env.JWT_SECRET)
        res.json({token})
    } catch (error) {
        res.json({failed,message:error.message})
    }
}