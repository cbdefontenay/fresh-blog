import { Handlers, PageProps } from "$fresh/server.ts";
import { render } from "gfm";
import Post from "../../islands/Post.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url).pathname.split("/");
    const file = url[2];
    const section = url[1];

    const decoder = new TextDecoder("utf-8");
    const markdown = decoder.decode(
      await Deno.readFile(`./posts/${section}/${file}.md`),
    );
    const markup = render(markdown);

    return ctx.render({ markup: markup });
  },
};

export default function MarkdownPost(props: PageProps) {
  return (
    <>
      <article>
        <Post markup={props.data.markup} />
      </article>
    </>
  );
}
