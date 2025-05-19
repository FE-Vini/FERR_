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
    const data = await req.json()
    
    // Handle both regular contact form and initiative application
    let emailContent = ''
    let subject = ''

    if (data.formType === 'initiative') {
      const {
        name,
        email,
        hasWorkedWithFreightCars,
        yearsOfExperience,
        previousWork,
        experience,
        workPreferences,
        preferredShift
      } = data

      subject = 'Neue Initiativbewerbung'
      emailContent = `
Name: ${name}
Email: ${email}

Erfahrung mit Güterwagen: ${hasWorkedWithFreightCars}
Berufserfahrung: ${yearsOfExperience}
Bisherige Tätigkeit: ${previousWork || 'Nicht angegeben'}

Erfahrungsbereiche:
${experience.map(exp => `- ${exp}`).join('\n')}

Wichtig bei der Arbeit:
${workPreferences.map(pref => `- ${pref}`).join('\n')}

Bevorzugte Arbeitszeit: ${preferredShift}
`.trim()
    } else {
      // Regular contact form
      const { name, email, message } = data
      
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

      subject = 'Neue Kontaktanfrage von der Website'
      emailContent = `
Name: ${name}
Email: ${email}
Message: ${message}
`.trim()
    }

    // Check and log API key status
    const apiKey = Deno.env.get('RESEND_API_KEY')
    console.log('API Key status:', apiKey ? 'Present' : 'Missing')
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return new Response(
        JSON.stringify({ 
          error: 'Email service configuration error',
          details: 'API key is missing'
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

    console.log('Attempting to send email...')
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'FE Rail & Repair Website <info@railandrepair.de>',
        to: 'michael.knorr@railandrepair.de',
        subject: subject,
        text: emailContent,
      })
    })

    // Get and log the response body
    const responseBody = await response.text()
    console.log('Resend API Response:', {
      status: response.status,
      statusText: response.statusText,
      body: responseBody
    })
    
    if (!response.ok) {
      console.error('Failed to send email:', responseBody)
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email',
          details: `API Status: ${response.status} - ${response.statusText}`,
          response: responseBody
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
        details: error.message,
        stack: error.stack
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