export default async function BlogPage({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;

    return (
        <>
        <h1>Blog page</h1>
        <p>It's id is: {id}</p>
        </>
    )
}