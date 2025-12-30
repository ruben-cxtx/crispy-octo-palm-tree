import { Author } from "./authors";
import { Tag } from "./tags";

type PostStatus = 'draft' | 'published';

export interface Post {
    id: number;
    title: string;
    content: string
    status: PostStatus;
    author: Author;
    tags: Tag[];
}
