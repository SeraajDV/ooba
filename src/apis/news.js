const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=76a8552f6837449299148ff37bf4adac";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}