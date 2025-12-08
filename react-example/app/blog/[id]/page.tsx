
type BlogPost = {
    title: string,
    text: string,
};
const posts: Array<BlogPost> = [
    {
        title: 'First post',
        text: 'This is a post'
    },
    {
        title: 'Second post',
        text: 'This is another post'
    },
];


export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  return (
    <>
        <h1 className="font-bold">{posts[id].title}</h1>
        <p>{posts[id].text}</p>
    </>
  )
}