import axios from "axios";

export async function youtubeSearch(query: string) {
  const searchQuery = encodeURIComponent(query);
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API}&q=${searchQuery}&videoDuration=medium&videoEmbeddable=true&type=video&maxResults=5`
  );

  if (!data) {
    console.log("youtube fail");
    return null;
  }
  if (data.items.length === 0) {
    console.log("youtube fail");
    return null;
  }
  return data.items[0].id.videoId;
}
