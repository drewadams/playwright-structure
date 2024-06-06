import { test } from "@playwright/test";

test("example api test", async ({ request }) => {
  const res = await request.get("https://jsonplaceholder.typicode.com/posts/1");
  console.log(res.status());
});
