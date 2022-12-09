/* eslint-disable no-console */
export interface contactProps {
  name: string;
  email: string;
  message: string;
}

interface Env {
  EMAIL_RECIPIENT: string;
  EMAIL_RECIPIENT_NAME: string;
}

let environmentVariables: Env;

async function sendEmail({ name, email, message }: contactProps) {
  const send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: environmentVariables.EMAIL_RECIPIENT,
              name: environmentVariables.EMAIL_RECIPIENT_NAME,
            },
          ],
        },
      ],
      from: {
        email: email,
        name: name,
      },
      subject: "New message from OliviaBeardsley.com",
      content: [
        {
          type: "text/plain",
          value: message,
        },
      ],
    }),
  });
  const resp = await fetch(send_request);
  const respText = await resp.text();
  console.log("sending email", respText);
  return respText;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "HEAD,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
  "Access-Control-Allow-Headers": "Content-Type",
};

function handleOptions(request: Request) {
  // Make sure the necessary headers are present
  // for this to be a valid pre-flight request
  let headers = request.headers;
  if (
    headers.get("Origin") !== null &&
    headers.get("Access-Control-Request-Method") !== null &&
    headers.get("Access-Control-Request-Headers") !== null
  ) {
    // Handle CORS pre-flight request.
    return new Response(null, {
      headers: corsHeaders,
    });
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders,
        Allow: "GET, HEAD, POST, OPTIONS",
      },
    });
  }
}
const submitHandler = async (request: Request) => {
  const { name, email, message }: any = await request.json();
  if (!email?.length || !name?.length || !message?.length) {
    return new Response(null, {
      status: 400,
      statusText: "Required fields: {name, email, message}",
    });
  } else {
    let respHeaders = {
      ...corsHeaders,
      "content-type": "application/json;charset=UTF-8",
    };
    console.log({ name, email, message });
    await sendEmail({ name, email, message });
    return new Response(JSON.stringify({ name, email, message }), {
      status: 201,
      headers: respHeaders,
    });
  }
};

async function handleRequest(request: Request) {
  return submitHandler(request);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
    console.log(request, env, ctx);
    environmentVariables = env;
    console.log(environmentVariables.EMAIL_RECIPIENT);
    if (request.method === "OPTIONS") {
      // Handle CORS preflight requests
      return handleOptions(request);
    } else if (request.method === "HEAD" || request.method === "POST") {
      // Handle requests to the API server
      return handleRequest(request);
    } else {
      return new Response(null, {
        status: 405,
        statusText: "Method Not Allowed",
      });
    }
  },
};
