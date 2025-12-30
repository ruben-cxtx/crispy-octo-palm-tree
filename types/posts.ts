import { Author } from "./authors";
import { Tag } from "./tags";

type PostStatus = 'draft' | 'published';

export interface Post {
    id: number;
    title: string;
    content: string
    status: PostStatus;
    author: Author;
    dateCreated: string;
    tags?: Tag[];
};

export type PostCreateInput = Omit<Post, 'id' | 'dateCreated' | 'author'> & {
    author: Author;
    tags?: string[];
};

export type PostUpdate =  Partial<PostCreateInput>;
