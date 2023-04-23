import { load } from "https://deno.land/std@0.184.0/dotenv/mod.ts";

// Load environment variables from .env file
await load({ export: true });

// Now you can access the environment variables using `Deno.env.get()`
export const SECRET_NAME = Deno.env.get("SECRET_NAME");
export const SECRET_EMAIL = Deno.env.get("SECRET_EMAIL");
export const SECRET_PASSWORD = Deno.env.get("SECRET_PASSWORD");

// Rest of your code...
