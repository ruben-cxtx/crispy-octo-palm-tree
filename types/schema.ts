import { Author, Post, PostTagJunction, Tag, Language, PostTranslation } from "@/types";


export interface MySchema {
    posts: Post[];
    authors: Author[];
    PostsTagsJunction: PostTagJunction[]
    tags: Tag[];
    languages: Language[];
    posts_translations: PostTranslation[];
}
