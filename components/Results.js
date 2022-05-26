import Thumbnail from "./Thumbnail"

const Results = ({ results }) => {
    console.log(results);
    return (
        <div className="px-4 my-6 sm:grid sm:grid-cols-2 md:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.map((result) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    );
};

export default Results;