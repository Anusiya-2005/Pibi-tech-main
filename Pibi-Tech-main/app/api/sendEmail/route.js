import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const client = new MongoClient(process.env.MONGO_URL);
  try {
    const form = await req.json();

    const database = client.db("PibiTech");
    const movies = database.collection("Messages");
    await movies.insertOne(form);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: {
        name: "Pibi Tech",
        address: process.env.USER,
      },
      to: form.email,
      subject: "Response",
      text: `We recieve your message we will get back you soon`,
    });

    await transporter.sendMail({
      from: {
        name: "Pibi Tech",
        address: process.env.USER,
      },
      to: "pibi.devloperhouse@gmail.com",
      subject: "New Email",
      text: `Name: ${form.firstName} ${form.lastName}
            PhoneNo: ${form.phoneNo}
            Email: ${form.email}
            Industry: ${form.industry}
            Country: ${form.country}
            Message: ${form.message}
      `,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Error" }, { status: 400 });
  } finally {
    await client.close();
  }
}
