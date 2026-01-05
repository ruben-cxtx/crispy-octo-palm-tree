import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { Post } from "@/types";
import { revalidatePath } from "next/cache";

export async function getPostBySlug(slug: string, locale: string): Promise<Post | null> {
    try {
        const posts = await directus.request (
            readItems('posts', {
                fields:[
                    '*',
                    'author',
                    'tags',
                    {translations: ['*']},
                ],
                filter: {
                    slug: {_eq: slug},
                    status: {_eq: 'published'}
                },
                deep: {
                    translations: {
                        _filter: {
                            languages_code: {_eq: locale}
                        }
                    }
                },
                limit: 1
            })
        );

        return (posts[0] as Post) || null;

    } catch(err) {
        console.error(`Failed to fetch post by slug: ${err}`);
        return null;
    }
}


export async function getAllPosts(slug: string, locale: string) {
    try {
        const posts = await directus.request(
            readItems('posts', {
                filter: {slug: {_eq: slug}},
                fields: ['id', 'content', {author: ['id', 'avatar', 'username', 'first_name', 'last_name']},
                {tags: ['id', {tags_id: ['id', 'name', 'slug']}] },
                {translations: ['*']}],
                limit: 50,
                sort: ['-date_created'],
                deep: {
                    translations: {
                        _filter: {
                            language_code: {_eq: locale}
                        }
                    }
                }
            })
        );

        return posts;

    } catch(err) {
        console.error(`Failed to fetch posts: ${err}`);
        revalidatePath('/app/blog');
    }
}

