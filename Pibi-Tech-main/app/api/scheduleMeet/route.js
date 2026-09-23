import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import axios from "axios";

const client = new MongoClient(process.env.MONGODB_URL);

async function getZoomAccessToken() {
  const response = await axios.post(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${process.env.ZOOM_ACCOUNT_ID}`,
    {},
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`
          ).toString("base64"),
      },
    }
  );

  return response.data.access_token;
}

export async function POST(req) {
  try {
    const body = await req.json();

    await client.connect();
    const db = client.db("pibi_web");
    const collection = db.collection("schedule_meetings");

    const startTime = new Date(`${body.fromDate}T${body.fromTime}`);

    const token = await getZoomAccessToken();

    const meeting = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        topic: "Pibi Consultation Meeting",
        type: 2,
        start_time: startTime.toISOString(),
        duration: 30,
        timezone: "Asia/Kolkata",
        settings: {
          join_before_host: true,
          approval_type: 0,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const meetLink = meeting.data.join_url;


    const result = await collection.insertOne({
      ...body,
      meetLink,
      createdAt: new Date(),
    });


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEW_USER,
        pass: process.env.NEW_PASS,
      },
    });

 
    await transporter.sendMail({
      from: process.env.NEW_USER,
      to: body.email,
      subject: "Meeting Scheduled Successfully",
      text: `Hello ${body.firstName} ${body.lastName},

Your meeting has been scheduled successfully.

📅 Date: ${body.fromDate}
⏰ Time: ${body.fromTime}
🔗 Zoom Link: ${meetLink}

Thank you.`,
    });

    
    await transporter.sendMail({
      from: process.env.NEW_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Meeting Booked",
      text: `New Meeting Booked

Name: ${body.firstName} ${body.lastName}
Email: ${body.email}
Phone: ${body.phoneNo}
Company: ${body.company}
Interest: ${body.interest}

📅 Date: ${body.fromDate}
⏰ Time: ${body.fromTime}

🔗 Zoom Link: ${meetLink}`,
    });

    return NextResponse.json(
      {
        success: true,
        meetLink,
        id: result.insertedId,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Error scheduling meeting" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}