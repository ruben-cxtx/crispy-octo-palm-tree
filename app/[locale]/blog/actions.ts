"use server"
import { PostCreateInput, PostUpdate } from "@/types"
import directus from "@/lib/directus"
import { createItem, updateItem, deleteItem } from "@directus/sdk"
import { revalidatePath } from "next/cache";
import { slugify } from "@/utils/slugify";

export async function createPostAction(formData: FormData) {

    const title = formData.get("title") as string;

    const rawData: PostCreateInput = {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        status: "published",
        slug: slugify(title),
        author: Number(formData.get("authorId")),
        tags: [
            { tags_id: Number(formData.get("tag_id")) }
        ]
    };

    try {
        await directus.request(createItem('posts', rawData));
        revalidatePath("/app/blog");

    } catch(err) {
        console.error(`Failed to create a post: ${err}`);
        return { error: "Something went wrong."};
    }
}

export async function updatePostAction(id: number, data: PostUpdate) {
    try {
        await directus.request(
            updateItem("posts", id, data)
        );

        revalidatePath(`/app/blog/${id}`);
        revalidatePath('/app/blog');

    } catch(err) {
        console.error(`Failed to update post: ${err}`);
        return { error: "Something went wrong. "};
    }
}

export async function deletePostAction(id: number) {
    try {
        await directus.request(
            deleteItem('posts', id)
        );
        revalidatePath('/app/blog');
    } catch(err) {
        console.error(`Failed to delete a post: ${err}`);
        return { error: "Something went wrong."};
    }
}

