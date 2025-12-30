import { Author, Post, PostTagJunction, Tag } from "@/types";


export interface MySchema {
    posts: Post[];
    authors: Author[];
    PostsTagsJunction: PostTagJunction[]
    tags: Tag[];
}
