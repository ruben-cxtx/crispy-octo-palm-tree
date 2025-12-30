import { Tag } from "./tags";
import { Post } from "./posts";

export interface PostTagJunction {
    id: number;
    post_id: Post;
    tag_id: Tag;
}
