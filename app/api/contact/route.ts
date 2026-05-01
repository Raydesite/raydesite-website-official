import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, project, quantity } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Raydesite Contact <onboarding@resend.dev>", // cambia esto cuando tengas dominio propio
      to: "raydesite@gmail.com",
      replyTo: email,
      subject: `New project request from ${name}`,
      html: `
				<div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 32px; background: #F4F3F0; border: 2px solid #1A1A1A;">
					<div style="background: #1A1A1A; padding: 16px 24px; margin-bottom: 24px;">
						<h1 style="color: #F5A623; font-size: 20px; margin: 0; letter-spacing: -0.02em;">
							RAYDESITE — New Contact Request
						</h1>
					</div>

					<div style="background: white; border: 2px solid #1A1A1A; padding: 24px; margin-bottom: 16px;">
						<p style="color: #8A8680; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Name</p>
						<p style="color: #1A1A1A; font-size: 16px; font-weight: bold; margin: 0;">${name}</p>
					</div>

					<div style="background: white; border: 2px solid #1A1A1A; padding: 24px; margin-bottom: 16px;">
						<p style="color: #8A8680; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Email</p>
						<p style="color: #1A1A1A; font-size: 16px; font-weight: bold; margin: 0;">
							<a href="mailto:${email}" style="color: #F5A623;">${email}</a>
						</p>
					</div>

					${
            project
              ? `
					<div style="background: white; border: 2px solid #1A1A1A; padding: 24px; margin-bottom: 16px;">
						<p style="color: #8A8680; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Project / What they need</p>
						<p style="color: #1A1A1A; font-size: 15px; margin: 0;">${project}</p>
					</div>
					`
              : ""
          }

					${
            quantity
              ? `
					<div style="background: white; border: 2px solid #1A1A1A; padding: 24px; margin-bottom: 16px;">
						<p style="color: #8A8680; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Estimated quantity / budget</p>
						<p style="color: #1A1A1A; font-size: 15px; margin: 0;">${quantity}</p>
					</div>
					`
              : ""
          }

					<div style="background: #F5A623; border: 2px solid #1A1A1A; padding: 16px 24px; margin-top: 24px;">
						<p style="color: #1A1A1A; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; margin: 0;">
							// Reply directly to this email to respond to ${name}
						</p>
					</div>
				</div>
			`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
