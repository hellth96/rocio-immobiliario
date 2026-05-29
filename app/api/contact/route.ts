import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { crearCompradorDesdeFormulario } from '@/lib/notion';

// Configurar transporte de email (usando Gmail o SendGrid)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Contraseña de aplicación Google
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, teléfono, asunto, mensaje } = body;

    // Enviar email a Rocío
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'rocio@rocioimmobiliario.cl',
      subject: `Nuevo contacto: ${asunto}`,
      html: `
        <h2>Nuevo mensaje de ${nombre}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${teléfono}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Enviar confirmación al cliente
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Hemos recibido tu mensaje',
      html: `
        <h2>Hola ${nombre},</h2>
        <p>Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto en las próximas 24 horas.</p>
        <p>Mientras tanto, puedes contactarme directamente por WhatsApp:</p>
        <p><a href="https://wa.me/56995665120?text=Hola Rocío, encontré tu página web y envíe una consulta.">+56 9 95665120</a></p>
        <p>Saludos,<br>Rocío Matamala</p>
      `,
    });

    // Crear comprador en Notion (opcional)
    await crearCompradorDesdeFormulario({
      nombre,
      teléfono,
      email,
      presupuesto: 0,
      etapa: 'Lead',
      propiedadesInterés: asunto,
      notas: mensaje,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
}