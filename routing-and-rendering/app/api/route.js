export function GET(request) {
  console.log(request.body);

  return new Response('Hello!');
}

// export function POST(request) {}
