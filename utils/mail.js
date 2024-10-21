import { createTransport } from "nodemailer";

export const mailTransporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "bboaduboateng2000@gmail.com",
    pass: "ysfdcclyhffxmgvd",
  },
  from: "bboaduboateng2000@gmail.com",
});
