const api_key = 'a7lDWcxwB0kCD1Jifil0lr8DJWF1Xn0s';
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data)
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        images: img.images?.downsized_medium.url
    }));
    return gifs;
}