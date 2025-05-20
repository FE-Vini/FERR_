import { createClient } from 'npm:@supabase/supabase-js@2.39.7'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

const WEBHOOK_URL = 'https://n8n-hd2r.onrender.com/webhook/5b98cc6c-1178-489f-b0b9-158f890a9d36'

// Create a single Supabase client instance
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_ANON_KEY') ?? '',
  {
    auth: {
      persistSession: false
    }
  }
)

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      status: 204,
      headers: corsHeaders 
    })
  }

  let startTime = Date.now()
  console.log('Function started at:', new Date().toISOString())

  try {
    // Validate that we received JSON in the request
    const contentType = req.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      throw new Error('Request must be JSON')
    }

    const data = await req.json()
    
    console.log('Processing request at:', new Date().toISOString(), {
      processingTime: Date.now() - startTime,
      dataSize: JSON.stringify(data).length
    })

    // Log the outgoing request
    console.log('Sending data to webhook:', {
      url: WEBHOOK_URL,
      timestamp: new Date().toISOString(),
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

    // Get the response content type and body
    const responseContentType = response.headers.get('content-type')
    const responseBody = await response.text()
    
    // Log the complete response details for debugging
    console.log('Webhook Response:', {
      timestamp: new Date().toISOString(),
      processingTime: Date.now() - startTime,
      status: response.status,
      statusText: response.statusText,
      contentType: responseContentType,
      body: responseBody.substring(0, 500) // Limit log size
    })

    // First check if the response was successful
    if (!response.ok) {
      throw new Error(`Webhook returned error status: ${response.status} - ${response.statusText}`)
    }

    // Handle non-JSON responses
    if (!responseContentType?.includes('application/json')) {
      throw new Error(`Unexpected response type from webhook: ${responseContentType}. Expected JSON response.`)
    }

    // Only try to parse JSON if we got a JSON response
    let jsonResponse
    try {
      jsonResponse = JSON.parse(responseBody)
    } catch (e) {
      throw new Error(`Failed to parse webhook response as JSON. Response starts with: ${responseBody.substring(0, 100)}...`)
    }

    console.log('Function completed successfully at:', new Date().toISOString(), {
      totalProcessingTime: Date.now() - startTime
    })

    return new Response(
      JSON.stringify({ 
        message: 'Data sent successfully',
        response: jsonResponse,
        processingTime: Date.now() - startTime
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
      timestamp: new Date().toISOString(),
      processingTime: Date.now() - startTime,
      message: error.message,
      stack: error.stack,
      cause: error.cause
    })

    // Return a more detailed error response
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process request',
        message: error.message,
        type: error.constructor.name,
        details: 'The webhook may be returning an error page or invalid response. Please check the webhook configuration.',
        processingTime: Date.now() - startTime
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