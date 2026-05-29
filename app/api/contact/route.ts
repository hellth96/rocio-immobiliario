import { NextRequest, NextResponse } from 'next/server';
import { crearCompradorDesdeFormulario } from '@/lib/notion';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, teléfono, asunto, mensaje } = body;

    // Validar datos
    if (!nombre || !email || !teléfono || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // ✅ NUEVO: Crear comprador automáticamente en Notion
    const creado = await crearCompradorDesdeFormulario({
      nombre,
      teléfono,
      email,
      presupuesto: 0,
      etapa: 'Lead',
      propiedadesInterés: asunto,
      notas: mensaje,
    });

    if (!creado) {
      console.warn('Advertencia: No se pudo crear en Notion, pero continuamos');
    }

    // Responder al cliente
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje recibido. Rocío se contactará en 24 horas.',
        notionCreated: creado 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en contacto:', error);
    return NextResponse.json(
      { error: 'Error procesando tu mensaje. Intenta nuevamente.' },
      { status: 500 }
    );
  }
}