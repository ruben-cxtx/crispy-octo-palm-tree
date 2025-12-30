import { Tag } from "./tags";

export interface PostTagJunction {
    id: number;
    post_id: number;
    tag_id: number | Tag;
}
