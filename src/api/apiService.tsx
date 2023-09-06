export async function GET() {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/categories", {
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
    })
    return await res.json()
}