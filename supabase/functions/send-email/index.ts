import { createClient } from 'npm:@supabase/supabase-js@2.39.7'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { name, email, message } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email and message are required' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      )
    }

    const emailContent = `
Name: ${name}
Email: ${email}
Message: ${message}
    `.trim()

    // Check if RESEND_API_KEY is set
    const apiKey = Deno.env.get('RESEND_API_KEY')
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return new Response(
        JSON.stringify({ error: 'Email service configuration error' }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      )
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'FE Rail & Repair Website <no-reply@railandrepair.de>',
        to: 'varis@feconsultinggmbh.onmicrosoft.com',
        subject: 'Neue Kontaktanfrage von der Website',
        text: emailContent,
      })
    })

    // Get the response body for error details
    const responseBody = await response.text()
    
    if (!response.ok) {
      console.error('Resend API Error:', {
        status: response.status,
        statusText: response.statusText,
        body: responseBody
      })
      
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email',
          details: `API Status: ${response.status} - ${response.statusText}`
        }),
        { 
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      )
    }

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { 
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    )
  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email',
        details: error.message
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    )
  }
})