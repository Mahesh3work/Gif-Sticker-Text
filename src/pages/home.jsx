 
import {useEffect} from "react";
import {GifState} from "../context/gif-context";
import Gif from "../components/gif";
import FilterGif from "../components/filter-gif";

// import FilterGif from "../components/filter-gif";

function Home() {
  const {gf, gifs, setGifs, filter} = GifState();
    console.log(gf);
  const fetchTrendingGIFs = async () => {
    const {data: gifs} = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(gifs);
    console.log("hello",gifs)
  };

  useEffect(() => {
    fetchTrendingGIFs();
  }, [filter]);

  return (
    <div className="">
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />

      <FilterGif showTrending />

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
      {gifs.length === 0 ? (
  <p>No GIFs found. Try a different filter!</p>
) : (
  gifs.map((gif) => <Gif gif={gif} key={gif.id} />)
)}
      </div>
    </div>
  );
}

export default Home;