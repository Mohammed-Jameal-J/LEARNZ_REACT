const MovieCard = ({movie}) => {

    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null

    return (
        <div>
            <div className="w-full bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                { imageUrl ? (
                    <img 
                        src={imageUrl} 
                        alt={movie.title} 
                        className="w-full h-48 object-cover"
                        loading="lazy"
                    />
                ): ( 
                    <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                        No Image
                    </div>
                )}
            </div>
            <div className="p-3">
                <h3 className="font-semibold">{movie.title}</h3>
                <p className="text-sm text-gray-400">{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;