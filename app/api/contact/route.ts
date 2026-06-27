import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, service, date, hour } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ninodiazmarcela@gmail.com", // tu correo real
      subject: "Nueva solicitud de cita",
      html: `
        <h2>Nueva solicitud de cita</h2>

        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Fecha solicitada:</strong> ${date}</p>
        <p><strong>Hora solicitada:</strong> ${hour}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Error enviando el correo" },
      { status: 500 }
    );
  }
}