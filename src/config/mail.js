import * as nodemailer from 'nodemailer';

export const Email = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.GMAILACCOUNT,
            pass:process.env.GMAILKEY
        }
    });
