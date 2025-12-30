import { Tag } from "./tags";

export interface PostTagJunction {
    id: number;
    posts_id: number;
    tags_id: number | Tag;
}
