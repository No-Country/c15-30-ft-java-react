export const dynamic = "force-dynamic";

export async function GET(req) {
    return new Response(JSON.stringify({
        message: "Hello World"
    }));

}

export async function POST(req) {
    return new Response(JSON.stringify({
        message: "Hello World"
    }));

}

