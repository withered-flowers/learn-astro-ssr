export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const responseJson = await response.json();

  return responseJson;
};
