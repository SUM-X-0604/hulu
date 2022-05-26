import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = ({ result }) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="p-4 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-90 hover:z-50">
            <Image
                layout="responsive"
                src={
                    `${base_url}${result.backdrop_path || $result.poster_path}` ||
                    `${base_url}${result.poster_path}`
                }
                alt="image"
                height={1080}
                width={1920}
            />
            <div className="p-2">
                <h1 className="truncate max-w-md">{result.overview}</h1>
                <p className="mt-1 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_title || result.original_name}</p>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {/* {result.media_type && `${result.media_type} `}{""} */}
                    {result.release_date || result.first_air_date} {""}
                    <ThumbUpIcon className="h-5 mx-2" />{result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
