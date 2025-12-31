export function slugify(text: string): string {
    return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')                 // Separate characters from their accents
    .replace(/[\u0300-\u036f]/g, '') // Remove the accents
    .replace(/\s+/g, '-')            // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '')         // Remove all non-word chars (except hyphens)
    .replace(/--+/g, '-')            // Replace multiple hyphens with a single one
    .replace(/^-+/, '')              // Trim hyphens from start
    .replace(/-+$/, '');             // Trim hyphens from end
}

