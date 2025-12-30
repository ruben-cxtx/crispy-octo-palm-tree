import { Author, Post, PostTagJunction, Tag } from "@/types";


export interface MySchema {
    Posts: Post[];
    Authors: Author[];
    PostsTagsJunction: PostTagJunction[]
    Tags: Tag[];
}
