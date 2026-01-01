import { notFound } from "next/navigation";
import { getPostBySlug } from "@/services/posts";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";


//Route Segment Caching

export const revalidate = 600 // every ten minutes

export const dynamicParams = true // allow new slugs at runtime


export async function generateStaticParams() {
    //fetch only the slugs from posts collection
    const posts = await directus.request(
        readItems('posts', {
            fields: ['slug'],
            filter: { status: {_eq: 'published'}},
            limit: 50,
            sort: ['-date_created']
        })
    );

    return posts.map((post) => ({
        slug: post.slug,
    }));
}




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
