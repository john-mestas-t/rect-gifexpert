export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0o49kUjxUjOFlH1n6dffxV9ZAef00iJe&q=${category}&limit=5`;
    console.log(url);
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}