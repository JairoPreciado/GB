/*import { NextResponse } from 'next/server'
import { systemPrompt } from '@/chatbot/utils/systemPrompt'

export async function POST(req: Request) {
  const { message } = await req.json()

  const cosa = "hola"
  if (!cosa) {
    return NextResponse.json({ reply: 'API Key no configurada' }, { status: 500 })
  }

  try {
    const openaiRes = await fetch('https://google.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${cosa}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o', // Más barato
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 500, // Límite razonable de respuesta
      }),
    })

    const data = await openaiRes.json()
console.log('[OpenAI response]', data) // <-- AGREGA ESTO

    const reply = data.choices?.[0]?.message?.content || 'Sin respuesta.'

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Error al llamar a OpenAI:', error)
    return NextResponse.json(
      { reply: 'Hubo un error al procesar la solicitud con OpenAI.' },
      { status: 500 }
    )
  }
}
*/