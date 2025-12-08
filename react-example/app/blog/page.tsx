
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

const cards = posts.map((c, i) => PostCard(c, i));



function PostCard(post: BlogPost, id: number) {
    return (
        <div className="w-50 m-3 p-1 text-lg border rounded" key={id}>
            <a href={`/blog/${id}`}></a> <h2 className="font-bold">{post.title}</h2>
            <p>{post.text}</p>
        </div>
    )
}

export default function BlogMain() {
    return (
        <>
            <h1 className="font-bold text-xl">This is a blog</h1>
            <ul>
                {cards}
            </ul>
        </>
    )
}