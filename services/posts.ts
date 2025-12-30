import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { Post } from "@/types";

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const posts = await directus.request (
            readItems('posts', {
                filter: {
                    slug: {_eq: slug},
                    status: {_eq: 'published'}
                },
                fields:[
                    '*',
                    'author',
                    'tags'
                ],
                limit: 1
            })
        );

        return (posts[0] as Post) || null;

    } catch(err) {
        console.error(`Failed to fetch post by slug: ${err}`);
        return null;
    }
}
