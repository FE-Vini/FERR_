import { createClient } from 'npm:@supabase/supabase-js@2.39.7'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

const WEBHOOK_URL = 'https://n8n-hd2r.onrender.com/webhook/5b98cc6c-1178-489f-b0b9-158f890a9d36'

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      status: 204, // No content for OPTIONS
      headers: corsHeaders 
    })
  }

  try {
    // Validate that we received JSON in the request
    const contentType = req.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      throw new Error('Request must be JSON')
    }

    const data = await req.json()
    
    // Log the outgoing request
    console.log('Sending data to webhook:', {
      url: WEBHOOK_URL,
      data: data
    })

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })

    // Get the response content type
    const responseContentType = response.headers.get('content-type')
    
    // Log the complete response details
    const responseBody = await response.text()
    console.log('Webhook Response:', {
      status: response.status,
      statusText: response.statusText,
      contentType: responseContentType,
      body: responseBody
    })

    // Check if we received HTML instead of JSON
    if (responseContentType?.includes('text/html')) {
      throw new Error('Received HTML response instead of JSON. The webhook endpoint might be returning an error page.')
    }

    // Try to parse the response as JSON
    let jsonResponse
    try {
      jsonResponse = JSON.parse(responseBody)
    } catch (e) {
      throw new Error(`Invalid JSON response from webhook: ${responseBody.substring(0, 100)}...`)
    }
    
    if (!response.ok) {
      throw new Error(`Webhook returned error status: ${response.status} - ${response.statusText}`)
    }

    return new Response(
      JSON.stringify({ 
        message: 'Data sent successfully',
        response: jsonResponse 
      }),
      { 
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    )
  } catch (error) {
    console.error('Function error:', {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    })

    return new Response(
      JSON.stringify({ 
        error: 'Failed to process request',
        message: error.message,
        type: error.constructor.name
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