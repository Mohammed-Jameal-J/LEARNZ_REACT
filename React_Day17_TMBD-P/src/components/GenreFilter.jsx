import { useGetGenresQuery } from "../api/tmdbApi";

const GenreFilter = ({selectedGenre, updateSelectedGenre}) => {

    const { data: genres, isLoading} = useGetGenresQuery()

    return (
        <div className="mb-6">
            <select
                value={selectedGenre}
                onChange={ (e) => updateSelectedGenre(e.target.value)}
                className="bg-gray-800 rounded-lg px-4 py-2 border border-gray-700 focus:outline-none"
            >
                <option value="">All Genres</option>
                { genres?.genres?.map( (item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}

export default GenreFilter;