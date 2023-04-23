import { Handlers, PageProps } from "$fresh/server.ts";
import Content from "../components/Content.tsx";
import { createObj, getPosts, PostsType } from "../articles/dev.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const posts: PostsType = await createObj();

    for (const dir of Object.keys(posts)) {
      posts[dir] = await getPosts(dir);

      for (const post of posts[dir]) {
        if (post && !post.date) {
          try {
            const res = await fetch(
              `https://api.github.com/repos/guiguerreiro39/fresh-blog/commits?path=posts/${dir}/${post?.url}.md`,
            );
            const payload = await res.json();
            post.date = payload[0].commit.author.date;
          } catch (err) {
            console.error(err);
          }
        }
      }
    }

    return ctx.render({ posts });
  },
};

export default function Home(props: PageProps) {
  return (
    <main class={`mx-auto min-w-screen min-h-screen relative`}>
      <Content posts={props.data.posts} />
    </main>
  );
}
