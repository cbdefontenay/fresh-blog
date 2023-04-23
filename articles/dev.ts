export type PostType = {
  url: string;
  title: string;
  date: Date | null;
};

export type PostsType = {
  [key: string]: PostType[];
};

export async function createObj() {
  const obj: PostsType = {};
  for await (const dir of Deno.readDir("./articles")) {
    if (dir.isDirectory) obj[dir.name] = [];
  }

  return obj;
}

export async function getPosts(dir: string) {
  const posts: PostType[] = [];

  for await (const post of Deno.readDir(`./articles/${dir}`)) {
    const path = `./articles/${dir}/${post.name}`;
    const { birthtime } = await Deno.stat(path);
    const file = await Deno.readTextFile(path);
    const firstLine = file.split("\n")[0];

    if (post.isFile) {
      const payload: PostType = {
        url: post.name.split(".md")[0],
        title: firstLine.slice(2, firstLine.length),
        date: birthtime,
      };
      posts.push(payload);
    }
  }

  return posts;
}
