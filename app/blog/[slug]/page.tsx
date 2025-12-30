import { notFound } from "next/navigation";
import { getPostBySlug } from "@/services/posts";

export default async function PostPage({params}: {params: Promise<{slug: string}>}){
    //1. await the dynamic parameters
    const {slug} = await params;

    //2. fetch the data using slug
    const post = await getPostBySlug(slug);

    //3. handle 404
    if(!post) notFound();

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    );
};
