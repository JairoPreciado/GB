import { NextResponse } from 'next/server'
import { systemPrompt } from '@/chatbot/utils/systemPrompt'

export async function POST(req: Request) {
  const { message } = await req.json()

  const apikey = process.env.OPENAI_API_KEY

  if (!apikey || !apikey.startsWith("sk-")) {
    return NextResponse.json({ reply: 'API Key no configurada o inválida' }, { status: 500 })
  }

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apikey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    })

    const data = await openaiRes.json()
    console.log('[OpenAI response]', JSON.stringify(data, null, 2))

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
