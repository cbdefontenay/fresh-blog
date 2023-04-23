import { Handlers, PageProps } from "$fresh/server.ts";
import HomeArticles from "../components/HomeArticles.tsx";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render({
      message: "Welcome to my Deno blog!",
      h2:
        "Here we talk about Deno and Fresh, the new next-gen JavaScript Framework.",
    });
  },
};

export default function Home(props: PageProps) {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-10 text-blue-700 font-mono">
        <h1 className="md:px-2 text-4xl font-bold text-center opacity-100 hover:opacity-60 transition-opacity duration-500">
          {props.data.message}
        </h1>
        <h2 className="mt-7 text-2xl text-center">
          {props.data.h2}
        </h2>
        <HomeArticles />
      </div>
    </>
  );
}
