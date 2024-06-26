import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import ejs from "ejs";
import path from "path";

export default class MailService {
    
    private static mailService: MailService;
    static getInstance() {
        if (!this.mailService) this.mailService = new MailService();
        return this.mailService;
    }

    private readonly transporter: Transporter<SMTPTransport.SentMessageInfo>
    private constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "465"),
            auth: {
                user: process.env.MAIL,
                pass: process.env.MAIL_PASS
            }
        });
    }

    async sendLoginCodeMail(to: string, loginCode: string) {
        this.transporter.sendMail({
            to: to,
            subject: "Login Code",
            html: await ejs.renderFile(path.resolve("mail-templates", "login-code.ejs"), { code: loginCode })
        }, (err, info) => {
            if (err) {
                console.log(err);
            }
            console.log(info);
        });
    }
};