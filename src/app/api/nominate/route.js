
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  console.log('API route hit! Starting nomination processing...');

  try {
    const formData = await request.formData();

    // Log all incoming data for debug
    console.log('Form data received:');
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${typeof value === 'object' ? '[File object]' : value}`);
    }

    const name = formData.get('name') || 'N/A';
    const age = formData.get('age') || 'N/A';
    const experience = formData.get('experience') || 'N/A';
    const email = formData.get('email') || 'N/A';
const contact = formData.get('contact') || 'N/A';
    const organization = formData.get('organization') || 'N/A';
    const field = formData.get('field') || 'N/A';
    const brief = formData.get('brief') || 'N/A';

    // Attachments
    const files = formData.getAll('attachments');
    const attachments = [];

    for (const file of files) {
      if (file instanceof Blob && file.size > 0) {  // File check
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name || 'attachment',
          content: buffer,
        });
        console.log(`Attachment added: ${file.name} (${file.size} bytes)`);
      }
    }

    console.log(`Sending email to ${process.env.ADMIN_EMAIL} with ${attachments.length} attachments`);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',  // Test ke liye safe sender
      to: process.env.ADMIN_EMAIL,
      subject: `New Nomination - ${name}`,
      html: `
        <h1>New Nomination Received</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Experience:</strong> ${experience} years</p>
        <p><strong>Email:</strong> ${email}</p>
<p><strong>Contact Number:</strong> ${contact}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Field:</strong> ${field}</p>
        <p><strong>Brief:</strong><br>${brief.replace(/\n/g, '<br>')}</p>
        <p>Attachments: ${attachments.length} file(s) attached</p>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Full catch error in route:', error.message, error.stack);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}