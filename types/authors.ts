export interface Author {
    id: number;
    first_name: string;
    last_name?: string;
    username: string;
    email: string;
    avatar: string;
    slug: string;
}

export type AuthorPublic = Omit<Author, 'email' | 'id'>

export type AuthorCard = Pick<Author, 'username' | 'avatar' | 'first_name' | 'last_name'>

export type AuthorCardWithPostCount = AuthorCard & {postNumber: number};

