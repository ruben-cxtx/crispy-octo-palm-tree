"use server"
import { PostCreateInput } from "@/types"
import directus from "@/lib/directus"
import { createItem } from "@directus/sdk"
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
