
export const getGifs = async (category) => {
  const result = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=Jn9larirWlKYIAwmYCJqj0poWJcdyWlh`
  );
  const { data } = await result.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};