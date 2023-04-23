// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_500.tsx";
import * as $2 from "./routes/_app.tsx";
import * as $3 from "./routes/api/articles.ts";
import * as $4 from "./routes/blog.tsx";
import * as $5 from "./routes/contact.tsx";
import * as $6 from "./routes/igelAdminArticles.tsx";
import * as $7 from "./routes/index.tsx";
import * as $8 from "./routes/login.tsx";
import * as $9 from "./routes/section/[title].tsx";
import * as $10 from "./routes/section/index.tsx";
import * as $$0 from "./islands/Admin.tsx";
import * as $$1 from "./islands/Navigation.tsx";
import * as $$2 from "./islands/Post.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_500.tsx": $1,
    "./routes/_app.tsx": $2,
    "./routes/api/articles.ts": $3,
    "./routes/blog.tsx": $4,
    "./routes/contact.tsx": $5,
    "./routes/igelAdminArticles.tsx": $6,
    "./routes/index.tsx": $7,
    "./routes/login.tsx": $8,
    "./routes/section/[title].tsx": $9,
    "./routes/section/index.tsx": $10,
  },
  islands: {
    "./islands/Admin.tsx": $$0,
    "./islands/Navigation.tsx": $$1,
    "./islands/Post.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
