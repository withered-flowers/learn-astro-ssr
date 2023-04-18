import type { APIRoute } from "astro";

enum ContentType {
  URLENCODED = "application/x-www-form-urlencoded",
}

export const post: APIRoute = async ({ request }) => {
  const contentType = request.headers.get("Content-Type");

  if (contentType === ContentType.URLENCODED) {
    const body = await request.formData();
    console.log(body.get("submittedValue"));

    return {
      body: JSON.stringify({
        message: "This is a POST request",
      }),
    };
  } else {
    return {
      body: JSON.stringify({
        message: "This is not a valid request",
      }),
    };
  }
};
