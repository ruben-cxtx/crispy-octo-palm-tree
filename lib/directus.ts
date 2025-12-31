import { createDirectus, rest, staticToken } from "@directus/sdk";
import { MySchema } from "@/types/schema";

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const directusToken = process.env.DIRECTUS_TOKEN ?? process.env.DIRECTUS_ADMIN_TOKEN;

if (!directusUrl) {
  throw new Error("Missing NEXT_PUBLIC_DIRECTUS_URL env var");
}

if (!directusToken) {
  throw new Error("Missing DIRECTUS_TOKEN (or DIRECTUS_ADMIN_TOKEN) env var");
}

const directus = createDirectus<MySchema>(directusUrl)
  .with(staticToken(directusToken))
  .with(rest());

export default directus;
