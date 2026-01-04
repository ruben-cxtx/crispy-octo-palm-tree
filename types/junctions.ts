import { Tag } from "./tags";
import { Post } from "./posts";

export interface PostTagJunction {
    id: number;
    posts_id: number | Post;
    tags_id: number | Tag;
}
