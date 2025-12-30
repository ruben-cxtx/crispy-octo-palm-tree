import { createDirectus, rest, staticToken } from "@directus/sdk";
import { MySchema } from "@/types/schema";

const directus = createDirectus<MySchema>(process.env.NEXT_PUBLIC_DIRECTUS_URL!)
.with(staticToken(process.env.DIRECTUS_TOKEN!))
.with(rest());

export default directus;
