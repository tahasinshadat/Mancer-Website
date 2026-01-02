import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Extract form fields
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const position = formData.get("position") as string
    const linkedin = formData.get("linkedin") as string
    const portfolio = formData.get("portfolio") as string
    const coverLetter = formData.get("coverLetter") as string

    // Extract files
    const resumeFile = formData.get("resume") as File | null
    const coverLetterFile = formData.get("coverLetterFile") as File | null

    // Validate required fields
    if (!name || !email || !position || !resumeFile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Prepare attachments array
    const attachments: Array<{
      filename: string
      content: Buffer
    }> = []

    // Add resume file
    if (resumeFile) {
      const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer())
      attachments.push({
        filename: resumeFile.name,
        content: resumeBuffer,
      })
    }

    // Add cover letter file if provided
    if (coverLetterFile) {
      const coverLetterBuffer = Buffer.from(await coverLetterFile.arrayBuffer())
      attachments.push({
        filename: coverLetterFile.name,
        content: coverLetterBuffer,
      })
    }

    // Send email via Resend
    await resend.emails.send({
      from: "Mancer Robotics Careers <onboarding@resend.dev>", // You'll change this to your domain later
      to: "tahasinshadat@gmail.com",
      replyTo: email,
      subject: `New Job Application: ${position} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">New Job Application</h2>

          <div style="margin: 20px 0; padding: 15px; background-color: #f0f0f0; border-left: 4px solid #000;">
            <p style="margin: 5px 0; font-size: 18px;"><strong>Position:</strong> ${position}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Personal Information</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone || "N/A"}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Professional Links</h3>
            <p style="margin: 8px 0;"><strong>LinkedIn:</strong> ${
              linkedin ? `<a href="${linkedin}">${linkedin}</a>` : "N/A"
            }</p>
            <p style="margin: 8px 0;"><strong>Portfolio:</strong> ${
              portfolio ? `<a href="${portfolio}">${portfolio}</a>` : "N/A"
            }</p>
          </div>

          ${
            coverLetter
              ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Cover Letter</h3>
            <div style="padding: 15px; background-color: #f5f5f5; border-left: 4px solid #666;">
              <p style="margin: 0; white-space: pre-wrap;">${coverLetter}</p>
            </div>
          </div>
          `
              : ""
          }

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Attachments</h3>
            <p style="margin: 8px 0;">📎 Resume: ${resumeFile?.name || "N/A"}</p>
            ${coverLetterFile ? `<p style="margin: 8px 0;">📎 Cover Letter: ${coverLetterFile.name}</p>` : ""}
          </div>

          <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            Submitted on ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST
          </p>
        </div>
      `,
      attachments: attachments,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Application form error:", error)
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
  }
}
