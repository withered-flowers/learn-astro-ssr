import type { APIRoute } from "astro";
import { getPosts } from "../../api/jsonplaceholder";

export const get: APIRoute = async () => {
  const posts = await getPosts();

  if (!posts) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
