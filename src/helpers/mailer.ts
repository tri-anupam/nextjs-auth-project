import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //create a hash token
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if(emailType === "VERIFY"){
      await User.findByIdAndUpdate(
        userId,
        {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        }
        // { new: true, runValidators: true }
        )
      }else if(emailType === "RESET"){
        await User.findByIdAndUpdate(userId,
          {
            forgotPasswordToken: hashedToken,
            verifyTokenExpiry: Date.now() + 3600000,
          })
      }

      const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.USER!,
          pass: process.env.PASSWORD!
        }
      });

      const mailOptions = {
        from: process.env.EMAIL!,
        to: email,
        subject: emailType === "VERIFY"?"Verify your email":"RESET your password",
        html:`<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email":"Reset your password"}</p>`
      }
      
      const mailresponse = await transport.sendMail(mailOptions);
      return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
