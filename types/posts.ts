import {Author, PostTagJunction, Tag} from '@/types'


type PostStatus = 'draft' | 'published';

export interface Post {
    id: number;
    title: string;
    content: string
    status: PostStatus;
    author: number | Author;
    slug: string;
    date_created: string;
    tags: PostTagJunction[] | Tag[];
};

export type PostCreateInput = {
    title: string;
    content: string;
    status: PostStatus;
    slug: string;
    author: number; //author's ID
    tags: {
        tags_id: number;
    }[]
}

export type PostUpdate =  Partial<PostCreateInput>;
