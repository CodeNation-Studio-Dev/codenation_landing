import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    name,
    email,
    company,
    brief,
    budget,
    hear,
    phone,
    countryCode,
    projectType,
  } = await request.json();

  try {
    const req = await fetch(`${process.env.NEXT_PUBLIC_CONTACT_FORM_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
        text: `Nuevo formulario de contacto:\n\nNombre: ${name}\n\nEmail: ${email}\n\nEmpresa: ${company}\n\nBrief: ${brief}\n\nPresupuesto: ${budget}\n\n¿Cómo nos conoció?: ${hear}\n\nTipo de proyecto: ${projectType}\n\nTeléfono: ${countryCode} ${phone}`,
      }),
    });

    if (!req.ok) {
      const data = await req.json();
      return NextResponse.json({ data }, { status: req.status });
    }
    return NextResponse.json("Form submitted successfully", { status: 200 });
  } catch {
    return NextResponse.json("Server error", { status: 500 });
  }
}
