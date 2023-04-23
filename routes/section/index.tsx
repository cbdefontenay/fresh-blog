import { Handlers, PageProps } from "$fresh/server.ts";
import { createObj, getPosts, PostsType } from "../../articles/dev.ts";
import Content from "../../components/Content.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const posts: PostsType = await createObj();

    for (const dir of Object.keys(posts)) {
      posts[dir] = await getPosts(dir);
    }

    return ctx.render({ posts });
  },
};

export default function Home(props: PageProps) {
  return (
    <main class="mx-auto min-w-screen min-h-screen relative">
      <Content posts={props.data.posts} />
    </main>
  );
}
