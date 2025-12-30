import {Author, PostTagJunction} from '@/types'


type PostStatus = 'draft' | 'published';

export interface Post {
    id: number;
    title: string;
    content: string
    status: PostStatus;
    author: number | Author;
    slug: string;
    dateCreated: string;
    tags: PostTagJunction[];
};

export type PostCreateInput = {
    title: string;
    content: string;
    status: PostStatus;
    author: number; //author's ID
    tags: {
        tags_id: number;
    }[]
}

export type PostUpdate =  Partial<PostCreateInput>;
