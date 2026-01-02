import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email via Resend
    await resend.emails.send({
      from: "Mancer Robotics <onboarding@resend.dev>", // You'll change this to your domain later
      to: "tahasinshadat@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">New Contact Form Submission</h2>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Company:</strong> ${company || "N/A"}</p>
            <p style="margin: 10px 0;"><strong>Service of Interest:</strong> ${service || "N/A"}</p>
          </div>

          <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #000;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            Submitted on ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST
          </p>
        </div>
      `,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
  }
}
