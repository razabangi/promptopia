export async function GET() {
    const posts = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        { cache: 'no-store' }
    );

    const data = await posts.json();

    return new Response(JSON.stringify(data));
}