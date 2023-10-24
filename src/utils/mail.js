import { Email } from "../config/mail.js";

export const servSendUrlResetPass = async (email,url) => {
    const mail = {
        from:"Churrasqueria La Herencia<"+process.env.GMAILACCOUNT+">",
        to:email,
        subject:"Recuperacion de contraseña",
        text:url
    };

    const response = await Email.sendMail(mail);
    if(response.accepted[0] == email) {
        return {mensaje:"success"}
    }else{
        return {mensaje:"error"}
    }
}