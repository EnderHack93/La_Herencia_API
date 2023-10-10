import { checkToken } from "../utils/jwt.js";


function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        const checkTokenProv = checkToken(bearerToken);
        if(checkTokenProv){
            next();
        }else{
            res.sendStatus(403);
        }
    }else{
        res.sendStatus(403);
    }
}
export {verifyToken,}