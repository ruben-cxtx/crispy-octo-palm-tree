import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { AuthorPublic } from "@/types";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";


export async function getAuthorsBySlug(slug: string): Promise<AuthorPublic | null> {
    try {
        const author = await directus.request(
            readItems('authors', {
                fields: ['avatar', 'first_name', 'last_name', 'username', 'slug',
                    { posts: ['id', 'title', 'date_created', 'slug']}
                ],
                filter: {slug: {_eq: slug}},
                limit: 1,
            })
        );

        if(!author) notFound();

        return author[0] as AuthorPublic;

    } catch(err) {
        console.error(`Failed to get author: ${err}`);
        return null;
    }
}

export default async function getAllAuthors() {
    try {
        const authors = await directus.request(
            readItems('authors', {
                fields: ['avatar', 'first_name', 'last_name', 'username',
                    { posts: ['id']}
                ],
                limit: -1,
                sort: ['-first_name']
            })
        );

        return authors.map((a) => ({
            username: a.username,
            avatar: a.avatar,
            first_name: a.first_name,
            last_name: a.last_name,
            post_number: a.posts?.length ?? 0,
        }))

    } catch(err) {
        console.error(`Failed to get authors: ${err}`);
        revalidatePath('/app/blog/authors');
    }
}
