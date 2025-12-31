export interface Author {
    id: number;
    firstName: string;
    lastName?: string;
    username: string;
    email: string;
    avatar: string;
    slug: string;
}

export type AuthorPublic = Omit<Author, 'email' | 'id'>

export type AuthorCard = Pick<Author, 'username' | 'avatar'>

