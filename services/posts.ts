import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { Post } from "@/types";
import { revalidatePath } from "next/cache";

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


export async function getAllPosts() {
    try {
        const posts = await directus.request(
            readItems('posts', {
                fields: ['id', 'title', 'content', {author: ['id', 'avatar', 'username', 'first_name', 'last_name']},
                {tags: ['id', {tags_id: ['id', 'name', 'slug']}] }],
                limit: 50,
                sort: ['-date_created'],
            })
        );

        return posts;

    } catch(err) {
        console.error(`Failed to fetch posts: ${err}`);
        revalidatePath('/app/blog');
    }
}

