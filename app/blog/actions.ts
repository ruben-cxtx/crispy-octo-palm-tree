"use server"
import { PostCreateInput, PostUpdate } from "@/types"
import directus from "@/lib/directus"
import { createItem, updateItem } from "@directus/sdk"
import { revalidatePath } from "next/cache";

export async function createPostAction(formData: FormData) {
    const rawData: PostCreateInput = {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        status: "published",
        author: Number(formData.get("authorId")),
        tags: [
            { tags_id: Number(formData.get("tag_id")) }
        ]
    };

    try {
        await directus.request(createItem('Posts', rawData));
        revalidatePath("/app/blog");

    } catch(err) {
        console.error(`Failed to create a post: ${err}`);
        return { error: "Something went wrong."};
    }
}

export async function updatePostAction(id: number, data: PostUpdate) {
    try {
        await directus.request(
            updateItem("Posts", id, data)
        );

        revalidatePath(`/app/blog/${id}`);
        revalidatePath('/app/blog');

    } catch(err) {
        console.error(`Failed to update post: ${err}`);
        return { error: "Something went wrong. "};
    }
}
