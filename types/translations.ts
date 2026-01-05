import {Post} from '@/types';

export interface Language {
    code: string;
    name: string;
    active: boolean;
}

export interface PostTranslation {
    id: number;
    post_id: string | Post; //relation to main post
    language_code: string | Language; //relation to the language
    title: string;
    content: string;
}
