import { createClient } from 'npm:@supabase/supabase-js@2.39.7'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

const WEBHOOK_URL = 'https://n8n-hd2r.onrender.com/webhook/5b98cc6c-1178-489f-b0b9-158f890a9d36'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const data = await req.json()
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const responseBody = await response.text()
    console.log('Webhook Response:', {
      status: response.status,
      statusText: response.statusText,
      body: responseBody
    })
    
    if (!response.ok) {
      console.error('Failed to send data to webhook:', responseBody)
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send data to webhook',
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
      JSON.stringify({ message: 'Data sent successfully' }),
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
        error: 'Failed to send data to webhook',
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